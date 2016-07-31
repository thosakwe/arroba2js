import antlr4 from "antlr4";
import {ArrobaLexer} from "../antlr/ArrobaLexer";
import {ArrobaParser} from "../antlr/ArrobaParser";
import BaseCompiler from "../base-compiler";
import escodegen from "escodegen";

export default class NaiveCompiler extends BaseCompiler {
  constructor(importResolver) {
    super();
    this.importResolver = importResolver;
  }

  static collectParams(paramSpec) {
    return paramSpec.ID().map(function (id) {
      return {
        type: "Identifier",
        name: id.getText()
      };
    });
  }

  static replaceAll(needle, replacer, haystack) {
    let result = String(haystack);
    let i = result.indexOf(needle);

    while (i !== -1) {
      result = result.replace(needle, replacer);
      i = result.indexOf(needle);
    }

    return result;
  }

  interpolate(literalNode) {
    let value = String(literalNode.value);
    const rgx = /\$\{([^}]+)}/g;
    const args = [];
    let match, result, i = 0;

    do {
      match = rgx.exec(value);

      if (match) {
        const text = match[1];
        const chars = new antlr4.InputStream(`${text}\n`);
        const lexer = new ArrobaLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ArrobaParser(tokens);
        parser.buildParseTrees = true;
        const expr = parser.expr();
        args.push(this.visitExpr(expr));
        value = NaiveCompiler.replaceAll(match[0], `<<${i++}>>`, value);
      }
    }
    while (match);

    if (!args.length)
      return literalNode;
    else {
      return {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "_arrobaInterpolateString"
        },
        arguments: [{
          value,
          type: "Literal"
        }].concat(args)
      }
    }
  }

  invokeFunction(target, args) {
    // Target should be exprContext, args, should be list of exprContext
    const callee = this.visitExpr(target);
    const callArgs = [];

    for (const arg of args) {
      callArgs.push(this.visitExpr(arg));
    }

    return {
      callee,
      arguments: callArgs,
      type: "CallExpression"
    };
  }

  loadPolyfills() {
    const polyfills = [
      "std.js",
      "io.js",
      "task.js",
      "event.js"
    ];

    for (const polyfill of polyfills) {
      this.importResolver.resolve(polyfill);
    }

    const register = [
      "import", "print", "printErr", "input", "for", "all", "any", "Task", "rgx", "cat", "Event", "Exception", "quit"
    ];

    for (const symbol of register) {
      this.set(symbol, true);
    }
  }

  static normalizeId(id) {
    return id
      .replace(/^this/, "arroba_this")
      .replace(/^for/, "_arrobaFor")
      .replace(/^import/, "_arrobaImport");
  }

  visitCompilationUnit(ctx) {
    const stmts = ctx.stmt();
    this.println("(function() {");
    this.stepUp();
    this.println('"use strict";');
    this.println(`
    if (typeof window !== 'undefined' && window.Event)
      window.__oldEvent = window.Event;
    `);
    this.loadPolyfills();

    for (const stmt of stmts) {
      const node = this.visitStmt(stmt);

      if (node) {
        this.println(escodegen.generate(node, {
          format: {
            indent: {
              style: "  ",
              base: this.tabs
            },
            quotes: "double",
            semicolons: true
          }
        }));
      }
    }

    this.stepDown();
    this.println(`
    if (typeof window !== 'undefined' && window.__oldEvent)
      window.Event = window.__oldEvent;
     `);
    this.println("})();");
  }

  visitStmt(ctx) {
    if (ctx.assignStmt()) {
      return this.visitAssignStmt(ctx.assignStmt());
    } else if (ctx.exprStmt()) {
      return this.visitExprStmt(ctx.exprStmt());
    } else if (ctx.retStmt()) {
      return {
        type: "ReturnStatement",
        argument: this.visitExpr(ctx.retStmt().expr())
      }
    } else if (ctx.tryStmt()) {
      return this.visitTryStmt(ctx.tryStmt());
    } else if (ctx.externStmt()) {
      return this.visitExternStmt(ctx.externStmt());
    }
  }

  visitAssignStmt(ctx) {
    let isNew = false;

    if (ctx.left instanceof ArrobaParser.IdExprContext) {
      const target = ctx.left.getText().replace(/\..+$/, "");

      if (!this.get(target))
        isNew = true;
    }

    if (ctx.left instanceof ArrobaParser.LocalExprContext || isNew) {
      // Very naive, going to blindly compile
      const name = NaiveCompiler.normalizeId(ctx.left.ID().getText());
      const init = this.visitExpr(ctx.right);
      this.set(name, init, ctx.left instanceof ArrobaParser.LocalExprContext);

      return {
        type: "VariableDeclaration",
        kind: "var",
        declarations: [{
          init,
          type: 'VariableDeclarator',
          id: {
            name,
            type: "Identifier"
          }
        }]
      };
    } else {
      if (ctx.left instanceof ArrobaParser.IdExprContext) {
        const name = NaiveCompiler.normalizeId(ctx.left.ID().getText());
        const init = this.visitExpr(ctx.right);
        this.set(name, init);
      }

      return {
        type: "ExpressionStatement",
        expression: {
          type: "AssignmentExpression",
          operator: "=",
          left: this.visitExpr(ctx.left),
          right: this.visitExpr(ctx.right)
        }
      };
    }
  }

  visitExprStmt(ctx) {
    return {
      type: "ExpressionStatement",
      expression: this.visitExpr(ctx.expr())
    };
  }

  visitExternStmt(ctx) {
    const id = ctx.ID().getText();
    this.set(id, true);

    return {
      type: "EmptyStatement"
    };
  }

  visitTryStmt(ctx) {
    const body = [];
    let handler = null;

    for (const stmt of ctx.toTry) {
      body.push(this.visitStmt(stmt));
    }

    if (ctx.toCatch.length) {
      let catchBody = [];

      for (const stmt of ctx.toCatch) {
        catchBody.push(this.visitStmt(stmt));
      }

      const name = NaiveCompiler.normalizeId(ctx.ID().getText());

      handler = {
        type: "CatchClause",
        param: {
          name,
          type: "Identifier"
        },
        body: {
          type: "BlockStatement",
          body: catchBody
        }
      };
    }

    return {
      handler,
      type: "TryStatement",
      block: {
        body,
        type: "BlockStatement"
      }
    };
  }

  visitExpr(expr) {
    if (expr instanceof ArrobaParser.MemberExprContext) {
      return {
        type: "MemberExpression",
        object: this.visitExpr(expr.expr()),
        property: {
          type: "Identifier",
          name: expr.ID().getText()
        }
      }
    }
    else if (expr instanceof ArrobaParser.IdExprContext) {
      return {
        type: "Identifier",
        name: NaiveCompiler.normalizeId(expr.ID().getText())
      }
    } else if (expr instanceof ArrobaParser.NumExprContext) {
      return {
        type: "Literal",
        value: parseFloat(expr.getText())
      }
    } else if (expr instanceof ArrobaParser.ConstBoolExprContext) {
      return {
        type: "Literal",
        value: expr.TRUE() ? true : false
      }
    } else if (expr instanceof ArrobaParser.NegationExprContext) {
      return {
        type: "UnaryExpression",
        argument: this.visitExpr(expr.expr())
      }
    } else if (expr instanceof ArrobaParser.AwaitExprContext) {
      const args = [];

      for (const arg of expr.args) {
        args.push(this.visitExpr(arg));
      }

      return {
        type: "CallExpression",
        callee: {
          type: "MemberExpression",
          object: this.visitExpr(expr.target),
          property: {
            type: "Identifier",
            name: "yield"
          }
        },
        arguments: args
      }
    } else if (expr instanceof ArrobaParser.ArrowRightExprContext) {
      if (expr.right instanceof ArrobaParser.IdExprContext) {
        const found = this.get(NaiveCompiler.normalizeId(expr.right.ID().getText()));

        if (found) {
          return this.invokeFunction(expr.right, [expr.left]);
        } else {
          this.set(expr.right.ID().getText(), expr.left);

          // Todo: Assignments via arrow operator
          return {
            type: "AssignmentExpression",
            operator: "=",
            left: this.visitExpr(expr.right),
            right: this.visitExpr(expr.left)
          };
        }
      }
      return this.invokeFunction(expr.right, [expr.left]);
    }
    else if (expr instanceof ArrobaParser.FunctionExprContext) {
      const body = [];
      let id = null;

      if (expr.ID())
        id = {
          type: "Identifier",
          name: expr.ID().getText()
        };

      for (const stmt of expr.stmt()) {
        const node = this.visitStmt(stmt);
        body.push(node);
      }

      return {
        id,
        type: "FunctionDeclaration",
        params: NaiveCompiler.collectParams(expr.paramSpec()),
        defaults: [],
        body: {
          body,
          type: "BlockStatement"
        }
      };
    } else if (expr instanceof ArrobaParser.InlineFunctionExprContext) {
      const returnValue = this.visitExpr(expr.expr());
      let id = null;

      if (expr.ID())
        id = {
          type: "Identifier",
          name: expr.ID().getText()
        };

      return {
        id,
        type: "FunctionDeclaration",
        params: NaiveCompiler.collectParams(expr.paramSpec()),
        defaults: [],
        body: {
          type: "BlockStatement",
          body: [{
            type: "ReturnStatement",
            argument: returnValue
          }]
        }
      };
    } else if (expr instanceof ArrobaParser.RawStringExprContext) {
      return this.interpolate({
        type: "Literal",
        value: expr.RAW_STRING().getText().replace(/(^r")|("$)/g, "")
      });
    } else if (expr instanceof ArrobaParser.StringExprContext) {
      return this.interpolate({
        type: "Literal",
        value: expr.STRING().getText().replace(/(^")|("$)/g, "")
      });
    } else if (expr instanceof ArrobaParser.IndexExprContext) {
      return {
        type: "MemberExpression",
        object: this.visitExpr(expr.target),
        property: this.visitExpr(expr.index),
        computed: true
      }
    } else if (expr instanceof ArrobaParser.ArrayExprContext) {
      const elements = [];

      for (const x of expr.expr()) {
        elements.push(this.visitExpr(x));
      }

      return {
        elements,
        type: "ArrayExpression"
      }
    } else if (expr instanceof ArrobaParser.LocalExprContext) {
      return {
        type: "Identifier",
        name: NaiveCompiler.normalizeId(expr.ID().getText())
      }
    } else if (expr instanceof ArrobaParser.InvocationExprContext) {
      return this.invokeFunction(expr.target, expr.args);
    } else if (expr instanceof ArrobaParser.MathExprContext || expr instanceof ArrobaParser.BoolExprContext) {
      const operator =
        expr.arithmeticOperator()
          ? expr.arithmeticOperator().getText()
          : expr.booleanOperator().getText();
      const left = this.visitExpr(expr.left);
      const right = this.visitExpr(expr.right);

      return {left, right, operator, type: "BinaryExpression"};
    } else if (expr instanceof ArrobaParser.NestedExprContext) {
      return this.visitExpr(expr.expr());
    } else if (expr instanceof ArrobaParser.RegexLiteralExprContext) {
      return {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "rgx"
        },
        arguments: [
          {
            type: "Literal",
            value: expr.REGEX_LITERAL().getText()
          }
        ]
      };
    }
    return {
      type: "Literal",
      value: expr.getText()
    };
  }
}

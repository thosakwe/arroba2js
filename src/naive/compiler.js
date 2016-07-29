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
      "io.js"
    ];

    for (const polyfill of polyfills) {
      this.importResolver.resolve(polyfill);
    }
  }

  visitCompilationUnit(ctx) {
    const stmts = ctx.stmt();
    this.println("(function() {");
    this.stepUp();
    this.println('"use strict";');
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
            quotes: "double"
          }
        }));
      }
    }

    this.stepDown();
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
    }
  }

  visitAssignStmt(ctx) {
    // Very naive, going to blindly compile
    const name = ctx.left.getText().replace(/^local:/, "");
    const init = this.visitExpr(ctx.right);
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
  }

  visitExprStmt(ctx) {
    return this.visitExpr(ctx.expr());
  }

  visitExpr(expr) {
    if (expr instanceof ArrobaParser.IdExprContext) {
      return {
        type: "Identifier",
        name: expr.ID().getText()
      }
    } else if (expr instanceof ArrobaParser.ArrowRightExprContext) {
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
    } else if (expr instanceof ArrobaParser.StringExprContext) {
      return {
        type: "Literal",
        value: expr.STRING().getText().replace(/(^")|("$)/g, "")
      }
    } else if (expr instanceof ArrobaParser.NumExprContext) {
      return {
        type: "Literal",
        value: parseFloat(expr.getText())
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
    }

    return {
      type: "Literal",
      value: expr.getText()
    };
  }
}

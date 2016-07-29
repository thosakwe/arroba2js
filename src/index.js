import antlr4 from "antlr4";
import {ArrobaLexer} from "./antlr/ArrobaLexer";
import {ArrobaParser} from "./antlr/ArrobaParser";
import NaiveCompiler from "./naive/compiler";
import FsImportResolver from "./resolvers/fs";

/**
 * Compiles Arroba code to ECMAScript 5.
 * @param src {String} The Arroba code to be compiled.
 * @param opts {Object} Any options to compile with.
 */
export default function compile(src, opts = {}) {
  "use strict";
  const chars = new antlr4.InputStream(`${src}\n`);
  const lexer = new ArrobaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ArrobaParser(tokens);
  parser.buildParseTrees = true;
  const ast = parser.compilationUnit();

  // Todo: Web-based import resolver, should use SYNCHRONOUS XHR
  const compiler = new NaiveCompiler();
  compiler.importResolver = new FsImportResolver(compiler);
  compiler.visitCompilationUnit(ast);
  const output = compiler.compile();

  if (compiler.failed()) {

  } else {
    return output;
  }
}

/*
 * Coming soon...
 *
export default function compile(src, opts = {}) {
    const chars = new antlr4.InputStream(input + '\n');
    const lexer = new ArrobaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ArrobaParser(tokens);
    parser.buildParseTrees = true;
    const ast = parser.compilationUnit();
    const compiler = new Compiler(opts);
    compiler.visitCompilationUnit(ast);
    return compiler.output;
};

  */

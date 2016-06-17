import antlr4 from "antlr4";
import {ArrobaLexer} from "./antlr/ArrobaLexer";
import {ArrobaParser} from "./antlr/ArrobaParser";
import {ArrobaVisitor} from "./antlr/ArrobaVisitor";
import Compiler from "./compiler/compiler";

/**
 * Compiles Arroba code to ECMAScript 5.
 * @param src {String} The Arroba code to be compiled.
 * @params opts {Object} Any options to compile with.
 */
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
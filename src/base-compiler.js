import {ArrobaVisitor} from "./antlr/ArrobaVisitor";

export default class BaseCompiler extends ArrobaVisitor {
  constructor(debugMode) {
    super();
    this.debugMode = debugMode;
    this.outputText = "";
    this.warnings = [];
    this.errors = [];
    this.tabs = 0;
  }

  compile() {
    return this.outputText;
  }

  debug(text) {
    if (this.debugMode) {
      writeln(`// ${text}`);
    }
  }

  fail() {
  }

  failed() {
    return false;
  }

  print(text) {
    for (let i = 0; i < this.tabs; i++) {
      this.write("  ");
    }
    this.write(text);
  }

  println(text) {
    this.print(`${text}\n`);
  }

  stepDown() {
    this.tabs--;
  }

  stepUp() {
    this.tabs++;
  }

  write(text) {
    this.outputText += text;
  }

  writeln(text) {
    this.write(`${text}\n`);
  }
}

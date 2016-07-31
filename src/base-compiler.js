import {ArrobaVisitor} from "./antlr/ArrobaVisitor";
import Scope from "./scope";

export default class BaseCompiler extends ArrobaVisitor {
  constructor(debugMode) {
    super();
    this.debugMode = debugMode;
    this.outputText = "";
    this.warnings = [];
    this.errors = [];
    this.tabs = 0;
    this.globalScope = new Scope();
    this.scopes = [this.globalScope];
  }

  compile() {
    return this.outputText;
  }

  createChildScope() {
    this.scopes.push(new Scope());
    return this.scopes.get(this.scopes.size() - 1);
  }

  debug(text) {
    if (this.debugMode) {
      writeln(`// ${text}`);
    }
  }

  exitLastScope() {
    this.scopes[this.scopes.length - 1].dead = true;
    this.scopes.splice(this.scopes.length - 1, 1);
  }

  fail() {
  }

  failed() {
    return false;
  }

  get(symbol) {
    return this.resolveSymbol(symbol);
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

  resolveSymbol(symbol) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      const scope = this.scopes[i];

      if (!scope.dead && Object.keys(scope.symbols).indexOf(symbol) !== -1) {
        return scope.symbols[symbol];
      }
    }

    return null;
  }

  scopeContaining(symbol) {
    for (const scope of this.scopes) {
      if (!scope.dead && Object.keys(scope.symbols).indexOf(symbol) !== -1)
        return scope;
    }

    return null;
  }

  set(symbol, value, self = false) {
    const symbolTable = this.scopes[this.scopes.length - 1].symbols;
    const existing = this.get(symbol);

    if (existing) {
      if (self === true) {
        symbolTable[symbol] = value;
        return value;
      } else {
        const containing = this.scopeContaining(symbol);

        if (containing) {
          containing.symbols[symbol] = value;
        }
      }
    } else {
      symbolTable[symbol] = value;
      return value;
    }
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

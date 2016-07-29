import fs from "fs";
import path from "path";
import ImportResolver from "./base";

export default class FsImportResolver extends ImportResolver {
  constructor(compiler) {
    super(compiler);
  }


  resolve(filename) {
    const code = fs.readFileSync(path.join(__dirname, `../polyfill/${filename}`), "utf8");

    for (const line of code.split(/\n/))
      this.compiler.println(line);
  }
}

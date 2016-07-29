#!/usr/bin/env node

import fs from "fs";
import {ArgumentParser} from "argparse";
import compile from "../index";

const filename = process.argv[2];
fs.readFile(filename, "utf8", (err, src) => {
  if (err)
    return console.error(err);
  else {
    const js = compile(src);
    console.log(js);
    fs.writeFileSync(filename.replace(/\.arr$/, ".js"), js, "utf8");
  }
});

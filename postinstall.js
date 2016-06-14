var fs = require("fs");

// Create lib, lib/antlr

function mkdirP(dir) {
    var exists = false;
    try {
        exists = fs.statSync(dir).isDirectory();
    } catch(e) {}

    if (!exists) {
        fs.mkdirSync(dir);
    }
}

mkdirP("./lib");
mkdirP("./lib/antlr");
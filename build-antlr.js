var exec = require("child_process").exec;

var cmd = process.platform === "win32"
    ? ".\\build.bat"
    : "sh ./build.sh";

exec(cmd, function(err, stdout, stderr) {
    if (err) {
        console.error("ANTLR build failed with error:");
        return console.error(err);
    }

    console.log(stdout);
    console.error(stderr);
});
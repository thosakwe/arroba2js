let input;

if (typeof window !== "undefined") {
  input = (prompt) => window.prompt(prompt);
} else {
  const readline = require("readline");
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  let _inputLine = null;
  rl.on('line', function(line){
    _inputLine = line;
  });

  input = (prompt) => {
    _inputLine = null;
    process.stdout.write(`${prompt} `);

    while (_inputLine === null) {
      // Wait
    }

    return _inputLine;
  };
}

function _arrobaPrint(out, args) {
  for (var argument of args) {
    if (typeof argument.str === "function") {
      out(argument.str());
    } else out(argument);
  }

  if (args.length)
    return args[0];
  else return args;
}

function _argsToArray() {
  const result = [];

  for (let i = 0; i < arguments.length; i++) {
    result.push(arguments[i]);
  }

  return result;
}

function print(x) {
  return _arrobaPrint(console.log.bind(console), _argsToArray.apply(this, arguments));
}

function printErr() {
  return _arrobaPrint(console.error.bind(console), _argsToArray.apply(this, arguments));
}

function _arrobaImport(location) {
  throw new Error("No import solution found.");
}

const _json = JSON;
function _arrobaNativeImport(location) {
  if (location === "<math>") {
    return Math;
  } else if (location === "<json>") {
    return {
      stringify: _json.stringify.bind(_json),
      parse: _json.parse.bind(_json)
    };
  } else if (location === "<task>") {
    const result = Task;

    result.resolve = val => {
      return Task(() => val);
    };

    result.reject = val => {
      return Task(() => {
        throw val;
      });
    };

    return result;
  } else if (location === "<util>") {
    return {String};
  } else return null;
}

if (typeof require !== "undefined") {
  _arrobaImport = (location) => {
    const result = _arrobaNativeImport(location);
    return result !== null ? result : require(location);
  };
} else {
  _arrobaImport = (location, timeout = 5000) => {
    const result = _arrobaNativeImport(location);

    if (result !== null)
      return result;

    const xhr = new XMLHttpRequest();
    let file = location.replace(/\.arr$/, ".js");
    file = /\.js$/.test(file) ? file : `${file}.js`;
    xhr.open("GET", file, false);

    let ms = 0, closed = 0;
    let interval;

    interval = setInterval(() => {
      ms++;

      if (ms >= timeout) {
        closed = true;
        clearInterval(interval);
        throw new Error(`Timeout of ${timeout}ms exceeded when importing '${location}'.`);
      }
    }, 1);
    xhr.send();

    while (xhr.readyState !== 4 && closed === 0) {
      // Wait
    }

    if (!closed) {
      clearInterval(interval);
      return eval(`(function() { return ${xhr.responseText}})();`);
    }
  };
}

function quit(code) {
  if (typeof process !== "undefined")
    return process.exit(code);
  else {
    throw new Error("'quit' is only supported in the Arroba interpreter, or when running on Node.js.");
  }
}

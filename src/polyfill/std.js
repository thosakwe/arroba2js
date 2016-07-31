function _arrobaReplaceAll(needle, replacer, haystack) {
  let result = String(haystack);
  let i = result.indexOf(needle);

  while (i !== -1) {
    result = result.replace(needle, replacer);
    i = result.indexOf(needle);
  }

  return result;
}

function _arrobaFor(len) {
  return (predicate) => {
    for (let i = 0; i < len; i++)
      predicate();
  };
}

function _arrobaInterpolateString() {
  let result = String(arguments[0]);

  for (let i = 1; i < arguments.length; i++) {
    const matcher = `<<${i - 1}>>`;
    result = _arrobaReplaceAll(matcher, String(arguments[i]), result);
  }

  return result;
}

function all(predicate) {
  return (arr) => {
    const result = [];

    for (const x of arr) {
      result.push(predicate(x));
    }

    return result;
  };
}

function any() {
  return {};
}

function cat(appendant) {
  return (target) => {
    if (Array.isArray(target)) {
      target.push(appendant);
      return target;
    } else return target + appendant;
  };
}

function extern() {
}

function rgx() {
  return ArrobaRegularExpression.apply(this, arguments);
}

function ArrobaRegularExpression() {
  let args = "";

  for (let i = 0; i < arguments.length; i++) {
    if (i > 0)
      args += ", ";
    args += String(`"${arguments[i]}"`);
  }

  // Todo: new (Function.prototype.bind.apply(RegExp, arguments));
  const _rgx = eval(`new RegExp(${args})`);

  const result = (str) => {
    if (_rgx.flags.indexOf('g') === -1) {
      const match = _rgx.exec(str);
      match.group = (i) => match[i];
      return match;
    } else {
      const _str = String(str);
      const result = [];
      let match;

      do {
        match = _rgx.exec(_str);

        if (match) {
          match.group = (i) => match[i];
          result.push(match);
        }
      } while (match);

      return result;
    }
  };

  result.str = () => `Matcher:<${_rgx.toString()}>`;
  return result;
}

function Exception() {
  return new (Function.prototype.bind.apply(Error, arguments));
}

Array.prototype.all = function (predicate) {
  const result = [];

  for (const x of this) {
    result.push(predicate(x));
  }

  return result;
};

Array.prototype.len = function() {
  return this.length;
};

function print() {
  console.log.apply(this, arguments);

  if (arguments.length)
    return arguments[0];
}

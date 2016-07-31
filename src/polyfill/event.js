function Event() {
  const _event = {
    _listeners: []
  };

  _event.on = (listener) => {
    _event._listeners.push(listener);
    return _event;
  };

  _event.listeners = () => _event._listeners;

  _event.emit = function() {
    const _arguments = arguments;
    for (const listener of _event.listeners()) {
      setTimeout(function() {
        listener.apply(_event, _arguments);
      }, 0);
    }

    return _event;
  };

  return _event;
}

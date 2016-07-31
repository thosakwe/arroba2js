function Task(task) {
  const _task = {
    _runFunc: task,
    _okListeners: [],
    _failListeners: []
  };

  _task.ok = (listener) => {
    _task._okListeners.push(listener);
    return _task;
  };

  _task.fail = (listener) => {
    _task._failListeners.push(listener);
    return _task;
  };

  _task.run = function() {
    const _arguments = arguments;

    setTimeout(() => {
      try {
        const result = _task.yield.apply(_task, _arguments);

        for (const listener of _task._okListeners) {
          setTimeout(() => {
            listener(result);
          }, 0);
        }
      } catch(err) {
        for (const listener of _task._failListeners) {
          setTimeout(() => {
            listener(result);
          }, 0);
        }
      }
    }, 0);

    return _task;
  };

  _task.yield = function() {
    return _task._runFunc.apply(_task, arguments);
  };

  return _task;
}

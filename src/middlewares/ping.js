const ping = (ee) => {
  return store => next => action => {
    ee.emit(action.type, action.message);
    return next(action);
  }
};

export default ping;
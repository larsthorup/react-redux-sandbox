/* eslint-env browser, amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}([], function () {
  function setState (state, newState) {
    // ToDo: use R.merge
    return newState;
  }

  function appReducer (state, action) {
    state = state || {};
    switch (action.type) {
      // ToDo: DYI
      case 'SET_STATE':
        return setState(state, action.state);
      default:
        return state;
    }
  }

  return appReducer;
}));

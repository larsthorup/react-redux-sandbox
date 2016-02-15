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
  function setState (state) {
    return {
      type: 'SET_STATE',
      state: state
    };
  }

  function setCurrentNode (id) {
    return {
      type: 'TREE.SET_CURRENT_NODE',
      id: id
    };
  }

  var appActions = {
    setState: setState,
    setCurrentNode: setCurrentNode
  };

  return appActions;
}));

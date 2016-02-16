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
}([
  './state/nodelist'
], function (T) {
  'use strict';

  function setState (state, action) {
    // ToDo: use R.merge
    return action.state;
  }

  function setCurrentNode (state, action) {
    var nodes = T.toggle('nodes', 'current', function (node) { return node.id === action.id; }, state.nodes);
    var newState = Object.assign({}, state);
    newState.nodes = nodes;
    return newState;
  }

  function appReducer (state, action) {
    state = state || {};
    switch (action.type) {
      case 'SET_STATE': // ToDo: DYI
        return setState(state, action);
      case 'TREE.SET_CURRENT_NODE': // ToDo: namespace
        return setCurrentNode(state, action);
      default:
        return state;
    }
  }

  return appReducer;
}));

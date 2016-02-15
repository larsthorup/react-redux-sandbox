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
  'use strict';

  function setState (state, action) {
    // ToDo: use R.merge
    return action.state;
  }

  // ToDo: use R.deepMap: https://github.com/adriaan-pelzer/ramda-mapObjDeep/blob/master/index.js
  // ToDo: use R.curry
  function toggle (prop, pred, nodeList) {
    // ToDo: make recursive
    return nodeList.map(function (node) {
      if (pred(node)) {
        let newNode = Object.assign({}, node); // ToDo: use R.assoc
        newNode[prop] = true;
        return newNode;
      } else if (node[prop]) {
        let newNode = Object.assign({}, node);
        delete newNode[prop];
        return newNode;
      } else {
        return node;
      }
    });
  }

  var T = {
    toggle: toggle
  };

  function setCurrentNode (state, action) {
    var nodes = T.toggle('current', function (node) { return node.id === action.id; }, state.nodes);
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

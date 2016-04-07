/* global fetch */
var R = require('ramda');
var camelCase = require('camelcase');

// ToDo: make actions FSA compliant: https://github.com/acdlite/flux-standard-action

function makeSimpleActionCreator (type) {
  var actionName = camelCase(type.toLowerCase());
  var actionCreator = function (payload) {
    return {
      type: type,
      payload: payload
    };
  };
  actionCreator.actionType = type;
  return R.assoc(actionName, actionCreator, {});
}

function makeAsyncActionCreator (fn) {
  var actionName = fn.name;
  return R.assoc(actionName, fn, {});
}

function makeActionCreator (def) {
  if (typeof def === 'string') {
    return makeSimpleActionCreator(def);
  } else {
    return makeAsyncActionCreator(def);
  }
}

function combineActionCreators (actionCreator, actionCreators) {
  return Object.assign(actionCreators, actionCreator);
}

function makeActionCreators (defs) {
  var actionCreators = R.map(makeActionCreator, defs);
  return R.reduce(combineActionCreators, {}, actionCreators);
}

function fetchingState (payload) {
  return function (dispatch) {
    dispatch(A.requestState(payload));
    var url = 'data/' + payload.name + '.json';
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch(A.receiveState(R.assoc('json', json, payload)));
    });
    // ToDo: error handling
  };
}

// ToDo: modularize actions into state actions and tree actions
var A = makeActionCreators([
  'SET_STATE',
  'ADD_STATE',
  'REQUEST_STATE',
  'RECEIVE_STATE',
  'SET_CURRENT',
  'ADD_TREE',
  'ADD_TREE_NODE',
  'RENAME_TREE_NODE',
  fetchingState
]);

module.exports = A;

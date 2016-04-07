/* global fetch */
var R = require('ramda');
var camelCase = require('camelcase');

// ToDo: make actions FSA compliant: https://github.com/acdlite/flux-standard-action

function make (type) {
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

function renameTreeNode (entity) {
  return function (id) {
    return function (name) {
      return {
        type: renameTreeNode.actionType,
        entity: entity,
        id: id,
        name: name
      };
    };
  };
}
renameTreeNode.actionType = 'RENAME_TREE_NODE';

// ToDo: modularize actions into state actions and tree actions
var A = Object.assign(make('SET_STATE'), make('ADD_STATE'), make('REQUEST_STATE'), make('RECEIVE_STATE'), make('SET_CURRENT'), make('ADD_TREE'), make('ADD_TREE_NODE'), {
  fetchingState: fetchingState,
  renameTreeNode: renameTreeNode
});

module.exports = A;

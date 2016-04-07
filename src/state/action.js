/* global fetch */

var R = require('ramda');
var actionHelper = require('../helper/actionHelper');

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
var A = actionHelper.makeActionCreators([
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

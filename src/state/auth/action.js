/* global fetch */

var R = require('ramda');
var actionHelper = require('../../helper/actionHelper');

function authAuthenticating (payload) {
  return function (dispatch) {
    dispatch(A.authRequest(payload));
    var url = 'data/auth-' + payload.credential.userName + '.json';
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.success) {
        dispatch(A.authSuccess(R.assoc('json', json, payload)));
      } else {
        // ToDo: dispatch(A.authFailure(R.assoc('json', json, payload)));
      }
    });
    // ToDo: .catch(err => dispatch(A.serverError(err))
  };
}

var A = actionHelper.makeActionCreators([
  'AUTH_REQUEST',
  'AUTH_SUCCESS',
  'AUTH_FAILURE',
  authAuthenticating
]);

module.exports = A;

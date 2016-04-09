var route = require('../../route');
var S = require('./state');
var A = require('./action');

function authSuccess (state, action) {
  route.history.push('/');
  // ToDo: use this pattern elsewhere
  return Object.assign({}, state, {
    isAuthenticated: true
  });
}

function reducer (state, action) {
  state = state || S.initial();
  switch (action.type) {
    case A.authSuccess.actionType:
      return authSuccess(state, action);
    default:
      return state;
  }
}

module.exports = reducer;

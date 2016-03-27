var R = require('ramda');
var Action = require('./appActions');

function setState (state, action) {
  return action.state;
}

function setCurrent (state, action) {
  // ToDo: return S.assoc(['current', action.entity], action.id, state)
  var current = R.assoc(action.entity, action.id, state.current);
  var newState = R.assoc('current', current, state);
  return newState;
}

function appReducer (state, action) {
  state = state || {};
  switch (action.type) {
    case Action.setState.actionType:
      return setState(state, action);
    case Action.setCurrent.actionType:
      return setCurrent(state, action);
    default:
      return state;
  }
}

module.exports = appReducer;

var S = require('./state/state');
var Action = require('./appActions');

function setState (state, action) {
  return action.state;
}

function setCurrent (state, action) {
  return S.assoc(['current', action.entity], action.id, state);
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

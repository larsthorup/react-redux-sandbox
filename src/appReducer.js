var R = require('ramda');

function setState (state, action) {
  // ToDo: use R.merge
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
    case 'SET_STATE': // ToDo: DRY
      return setState(state, action);
    case 'SET_CURRENT':
      return setCurrent(state, action);
    default:
      return state;
  }
}

module.exports = appReducer;

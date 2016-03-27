var T = require('./state/nodelist');

function setState (state, action) {
  // ToDo: use R.merge
  return action.state;
}

function setCurrentNode (state, action) {
  var domain = 'food'; // ToDo: get rid of this via flattening the state tree
  var nodes = T.toggle('nodes', 'current', function (node) { return node.id === action.id; }, state[domain].nodes);
  var newState = Object.assign({}, state);
  newState[domain] = {nodes: nodes};
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

module.exports = appReducer;

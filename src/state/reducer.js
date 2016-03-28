var S = require('./state');
var A = require('./action');

function setState (state, action) {
  return action.state;
}

function setCurrent (state, action) {
  return S.assoc(['entities', 'tree', action.entity, 'current'], action.id, state);
}

function addTree (state, action) {
  // ToDo: use R.pipe
  return S.assoc(['entities', 'tree', action.entity], {}, S.assoc(['entities', action.entity], {}, state));
}

function addTreeNode (state, action) {
  return S.assoc(['entities', action.entity, action.id], {name: action.id, subtypes: []}, state);
}

function renameTreeNode (state, action) {
  return S.assoc(['entities', action.entity, action.id, 'name'], action.name, state);
}

// ToDo: avoid switch statement
function appReducer (state, action) {
  switch (action.type) {
    case A.setState.actionType:
      return setState(state, action);
    case A.addTree.actionType:
      return addTree(state, action);
    case A.addTreeNode.actionType:
      return addTreeNode(state, action);
    case A.renameTreeNode.actionType:
      return renameTreeNode(state, action);
    case A.setCurrent.actionType:
      return setCurrent(state, action);
    default:
      return state;
  }
}

module.exports = appReducer;

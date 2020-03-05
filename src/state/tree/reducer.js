var R = require('ramda');
var S = require('./state');
var A = require('./action');

function addState (state, action) {
  // ToDo: use R.pipe
  var mergedEntities = S.assoc(['entities'], R.merge(state.entities, action.payload.state.entities), state);
  return S.assoc(['entities', 'tree'], R.merge(state.entities.tree, action.payload.state.entities.tree), mergedEntities);
}

function requestState (state, action) {
  // ToDo: mark as fetching
  return state;
}

function receiveState (state, action) {
  var addStateAction = S.assoc(['payload', 'state'], action.payload.json, action);
  return addState(state, addStateAction);
}

function setCurrent (state, action) {
  return S.assoc(['entities', 'tree', action.payload.entity, 'current'], action.payload.id, state);
}

function addTree (state, action) {
  // ToDo: use R.pipe
  return S.assoc(['entities', 'tree', action.payload.entity], {}, S.assoc(['entities', action.payload.entity], {}, state));
}

function addTreeNode (state, action) {
  return S.assoc(['entities', action.payload.entity, action.payload.id], { name: action.payload.id, subtypes: [] }, state);
}

function renameTreeNode (state, action) {
  return S.assoc(['entities', action.payload.entity, action.payload.id, 'name'], action.payload.name, state);
}

function reducer (state, action) {
  state = state || S.initial();
  switch (action.type) {
    case A.addState.actionType:
      return addState(state, action);
    case A.requestState.actionType:
      return requestState(state, action);
    case A.receiveState.actionType:
      return receiveState(state, action);
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

module.exports = reducer;

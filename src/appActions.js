function setState (state) {
  return {
    type: 'SET_STATE',
    state: state
  };
}

function setCurrentNode (id) {
  return {
    type: 'TREE.SET_CURRENT_NODE',
    id: id
  };
}

var appActions = {
  setState: setState,
  setCurrentNode: setCurrentNode
};

module.exports = appActions;


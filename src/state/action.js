function setState (state) {
  return {
    type: setState.actionType,
    state: state
  };
}
setState.actionType = 'SET_STATE';

function addTree (entity) {
  return {
    type: addTree.actionType,
    entity: entity
  };
}
addTree.actionType = 'ADD_TREE';

function addTreeNode (entity) {
  return function (id) {
    return {
      type: addTreeNode.actionType,
      entity: entity,
      id: id
    };
  };
}
addTreeNode.actionType = 'ADD_TREE_NODE';

function renameTreeNode (entity) {
  return function (id) {
    return function (name) {
      return {
        type: renameTreeNode.actionType,
        entity: entity,
        id: id,
        name: name
      };
    };
  };
}
renameTreeNode.actionType = 'RENAME_TREE_NODE';

function setCurrent (entity) {
  return function (id) {
    return {
      type: setCurrent.actionType,
      entity: entity,
      id: id
    };
  };
}
setCurrent.actionType = 'SET_CURRENT';

module.exports = {
  setState: setState,
  addTree: addTree,
  addTreeNode: addTreeNode,
  renameTreeNode: renameTreeNode,
  setCurrent: setCurrent
};

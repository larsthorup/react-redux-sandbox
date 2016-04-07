var R = require('ramda');
var camelCase = require('camelcase');

// ToDo: make actions FSA compliant: https://github.com/acdlite/flux-standard-action

function make (type) {
  var actionName = camelCase(type.toLowerCase());
  var actionCreator = function (payload) {
    return {
      type: type,
      payload: payload
    };
  };
  actionCreator.actionType = type;
  return R.assoc(actionName, actionCreator, {});
}

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

module.exports = Object.assign(make('SET_STATE'), make('ADD_STATE'), {
  addTree: addTree,
  addTreeNode: addTreeNode,
  renameTreeNode: renameTreeNode,
  setCurrent: setCurrent
});

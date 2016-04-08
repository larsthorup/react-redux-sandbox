var actionHelper = require('../helper/actionHelper');
var treeActions = require('./tree/action');

var A = Object.assign(actionHelper.makeActionCreators([
  'SET_STATE'
]), treeActions);

module.exports = A;

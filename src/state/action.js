var actionHelper = require('../helper/actionHelper');
// ToDo: use requireAll
var authActions = require('./auth/action');
var treeActions = require('./tree/action');

var A = Object.assign(actionHelper.makeActionCreators([
  'SET_STATE'
]), authActions, treeActions);

module.exports = A;

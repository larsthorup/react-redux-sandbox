var redux = require('redux');
var A = require('./action');
var treeReducer = require('./tree/reducer');

function setState (state, action) {
  return action.payload.state;
}

var subReducer = redux.combineReducers({
  tree: treeReducer
});

function reducer (state, action) {
  switch (action.type) {
    case A.setState.actionType:
      return setState(state, action);
    default:
      return subReducer(state, action);
  }
}

module.exports = reducer;


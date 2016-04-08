var treeState = require('./tree/state');

function initial () {
  return {
    tree: treeState.initial()
  };
}

module.exports = {
  initial: initial
};

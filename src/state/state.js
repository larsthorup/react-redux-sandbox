var R = require('ramda');

function assoc (path, val, obj) {
  var prop = path[0];
  if (path.length > 1) {
    val = assoc(R.drop(1, path), val, obj[prop]);
  }
  return R.assoc(prop, val, obj);
}

function initial () {
  return {
    entities: {
      tree: {}
    }
  };
}

function loadTree (tree, state) {
  var entity = Object.keys(tree)[0];
  return assoc(['entities', entity], tree, state);
}

module.exports = {
  assoc: assoc,
  initial: initial,
  loadTree: loadTree
};

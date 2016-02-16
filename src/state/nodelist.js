var R = require('ramda');

function map (subProp, transformer, t) {
  return t.map(function (n) {
    // ToDo: avoid creating new nodelist if no nodes were changed
    var subTree = n[subProp];
    var node = subTree ? R.assoc(subProp, map(subProp, transformer, subTree), n) : n;
    return transformer(node);
  });
}

function toggle (subProp, prop, pred, t) {
  return map(subProp, function (n) {
    if (pred(n)) {
      if (!n[prop]) {
        return R.assoc(prop, true, n);
      } else {
        return n;
      }
    } else if (n[prop]) {
      return R.dissoc(prop, n);
    } else {
      return n;
    }
  }, t);
}

// ToDo: support currying for all methods
// ToDo: support T('nodes')
var T = {
  map: map,
  toggle: toggle
};

module.exports = T;

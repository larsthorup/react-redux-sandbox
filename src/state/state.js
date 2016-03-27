var R = require('ramda');

function assoc (props, val, obj) {
  if (props.length !== 2) throw new Error('not implemented');
  return R.assoc(props[0], R.assoc(props[1], val, obj[props[0]]), obj);
}

module.exports = {
  assoc: assoc
};

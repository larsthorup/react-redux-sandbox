var R = require('ramda');
var camelCase = require('camelcase');

function makeSimpleActionCreator (type) {
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

function makeAsyncActionCreator (fn) {
  var actionName = fn.name;
  return R.assoc(actionName, fn, {});
}

function makeActionCreator (def) {
  if (typeof def === 'string') {
    return makeSimpleActionCreator(def);
  } else {
    return makeAsyncActionCreator(def);
  }
}

function combineActionCreators (actionCreator, actionCreators) {
  return Object.assign(actionCreators, actionCreator);
}

function makeActionCreators (defs) {
  var actionCreators = R.map(makeActionCreator, defs);
  return R.reduce(combineActionCreators, {}, actionCreators);
}

module.exports = {
  makeActionCreators: makeActionCreators
};

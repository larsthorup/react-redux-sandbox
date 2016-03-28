var R = require('ramda');
var S = require('./state');
var appReducer = require('./reducer');

function applyActions (state, actions) {
  return R.reduce(appReducer, state, actions);
}

function applyArgs (args, actionCreator) {
  if (args.length === 0) {
    return actionCreator;
  } else {
    return applyArgs(R.drop(1, args), actionCreator(args[0]));
  }
}

function buildActions (actionBuilders) {
  var actions = R.map(function (actionBuilder) {
    var args = actionBuilder.args;
    var actionCreator = actionBuilder.actionCreator;
    return applyArgs(args, actionCreator);
  })(actionBuilders);
  return actions;
}

function flatten (parentArgs, builders) {
  var actionBuilders = R.flatten(R.map(function (entityBuilder) {
    var entity = entityBuilder[0];
    var actionCreators = entityBuilder[1];
    var args = R.append(entity, parentArgs);
    return R.map(function (keyBuilders) {
      if (typeof keyBuilders === 'function') {
        return {args: args, actionCreator: keyBuilders};
      } else {
        return flatten(args, keyBuilders);
      }
    })(actionCreators);
  })(R.toPairs(builders)));
  // var actionBuildes = [
  //   {args: ['food'], actionCreator: A.addTree},
  //   {args: ['food', 'apple'], actionCreator: A.AddTreeNode},
  //   {args: ['food', 'apple'], actionCreator: A.SetCurrent}
  // ];
  return actionBuilders;
}

function build (builders, state) {
  builders = builders || {};
  state = state || S.initial();
  return applyActions(state, buildActions(flatten([], builders)));
}

module.exports = build;

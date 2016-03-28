/* eslint-env mocha */

var Action = require('./appActions');
var S = require('./state/state');
var appReducer = require('./appReducer');

describe('appReducer', function () {
  describe('setState', function () {
    it('should replace the state', function () {
      var previousState = S.initial;
      // ToDo: build({'food': [A.addTree]})
      // ToDo: reduce([A.init, A.addTree('food')]);
      var loadedState = S.loadTree({'food': {}}, S.initial());
      var action = Action.setState(loadedState);
      var state = appReducer(previousState, action);
      state.should.deep.equal(loadedState);
    });
  });

  describe('setCurrent', function () {
    it('should move current flag to specified node', function () {
      // ToDo: build({'food': [A.addTree, {'apple': [A.addTreeNode, a.setCurrent]}]})
      // ToDo: reduce([A.init, A.addTree('food'), A.addTreeNode('food')('apple'), A.setCurrent('food')('apple')])
      var previousState = S.loadTree({food: {'orange': {}}, place: {'africa': {}}}, S.initial());
      var action = Action.setCurrent('food')('orange');
      var state = appReducer(previousState, action);
      state.entities.tree.food.current.should.equal('orange');
      // ToDo: verify that unchanged branches stays as the original object references
    });
  });

  describe('unknown action', function () {
    it('should be ignored', function () {
      var action = {type: 'UNKNOWN'};
      var previousState = {some: 'state'};
      var state = appReducer(previousState, action);
      state.should.deep.equal({some: 'state'});
    });
  });
});

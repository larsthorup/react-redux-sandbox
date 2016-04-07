/* eslint-env mocha */

var A = require('./action');
var B = require('./builder');
var appReducer = require('./reducer');

describe('reducer', function () {
  describe('setState', function () {
    it('should replace the state', function () {
      var previousState = B.build();
      var loadedState = B.build({'food': [B.addTree]});
      var action = A.setState({state: loadedState});
      var state = appReducer(previousState, action);
      state.should.deep.equal(loadedState);
    });
  });

  describe('addState', function () {
    it('should merge the state', function () {
      var previousState = B.build({'food': [B.addTree, {'apple': [A.addTreeNode]}]});
      var loadedState = B.build({'place': [B.addTree, {'europe': [A.addTreeNode]}]});
      var action = A.addState({state: loadedState});
      var state = appReducer(previousState, action);
      state.entities.tree.food.should.deep.equal({});
      state.entities.tree.place.should.deep.equal({});
      state.entities.food.apple.name.should.deep.equal('apple');
      state.entities.place.europe.name.should.deep.equal('europe');
    });
  });

  describe('requestState', function () {
    it('should do nothing, for now', function () {
      var previousState = B.build();
      var action = A.requestState({name: 'food'});
      var state = appReducer(previousState, action);
      state.should.equal(previousState);
    });
  });

  describe('receiveState', function () {
    it('should merge the state', function () {
      var previousState = B.build({'food': [B.addTree, {'apple': [A.addTreeNode]}]});
      var loadedState = B.build({'place': [B.addTree, {'europe': [A.addTreeNode]}]});
      var action = A.receiveState({json: loadedState});
      var state = appReducer(previousState, action);
      state.entities.tree.food.should.deep.equal({});
      state.entities.tree.place.should.deep.equal({});
      state.entities.food.apple.name.should.deep.equal('apple');
      state.entities.place.europe.name.should.deep.equal('europe');
    });
  });

  describe('setCurrent', function () {
    it('should move current flag to specified node', function () {
      var previousState = B.build({'food': [B.addTree, {'apple': [A.addTreeNode, B.setCurrent], 'orange': [A.addTreeNode]}]});
      var action = A.setCurrent({entity: 'food', id: 'orange'});
      var state = appReducer(previousState, action);
      state.entities.tree.food.current.should.equal('orange');
      state.entities.food.should.equal(previousState.entities.food); // Note: same object
    });
  });

  describe('unknown action', function () {
    it('should be ignored', function () {
      var previousState = B.build();
      var action = {type: 'UNKNOWN'};
      var state = appReducer(previousState, action);
      state.should.equal(previousState); // Note: same object
    });
  });
});

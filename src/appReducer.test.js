/* eslint-env mocha */

var Action = require('./appActions');
var appReducer = require('./appReducer');

describe('appReducer', function () {
  describe('setState', function () {
    it('should replace the state', function () {
      var action = Action.setState({some: 'state'});
      var initialState; // Note: is undefined
      var state = appReducer(initialState, action);
      state.should.deep.equal({some: 'state'});
    });
  });

  describe('setCurrent', function () { // ToDo: modular reducers
    it('should move current flag to specified node', function () {
      var action = Action.setCurrent('food')('orange');
      var previousState = {current: {food: 'apple', place: 'africa'}};
      var state = appReducer(previousState, action);
      state.should.deep.equal({current: {food: 'orange', place: 'africa'}});
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

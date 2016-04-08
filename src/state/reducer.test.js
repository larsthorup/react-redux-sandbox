/* eslint-env mocha */

var A = require('./action');
var B = require('./tree/builder');
var reducer = require('./reducer');

describe('reducer', function () {
  describe('setState', function () {
    it('should replace the state', function () {
      var previousState = B.build();
      var loadedState = B.build({'food': [B.addTree]});
      var action = A.setState({state: loadedState});
      var state = reducer(previousState, action);
      state.should.deep.equal(loadedState);
    });
  });
});

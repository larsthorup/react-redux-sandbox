/* eslint-env mocha */

var S = require('./state');

describe('state', function () {
  describe('assoc', function () {
    it('should return a new object with the property at path having the new value', function () {
      var oldState = {current: {food: 'apple'}, other: {}};
      var state = S.assoc(['current', 'food'], 'orange', oldState);
      state.current.food.should.equal('orange');
      state.other.should.equal(oldState.other); // Note: same object
    });
    it('should (for now) error when not exactly two props', function () {
      (function () { S.assoc([], 42, {}); }).should.throw(Error, 'not implemented');
    });
  });
});

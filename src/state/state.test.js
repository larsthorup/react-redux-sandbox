/* eslint-env mocha */

var S = require('./state');

describe('state', function () {
  describe('assoc', function () {
    it('should return a new object with the property at path having the new value', function () {
      var oldState = {entities: {tree: {food: {current: 'apple'}, place: {current: 'europe'}}}};
      var state = S.assoc(['entities', 'tree', 'food', 'current'], 'orange', oldState);
      state.entities.tree.food.current.should.equal('orange');
      state.entities.tree.place.should.equal(oldState.entities.tree.place); // Note: same object
    });
  });
});

/* eslint-env mocha */

var T = require('./nodelist');

describe('T', function () {
  describe('toggle', function () {
    it('should work on top level nodes', function () {
      var nodelist = [
        {current: true, id: 'apple'},
        {id: 'orange'}
      ];
      var result = T.toggle('nodelist', 'current', function (n) { return n.id === 'orange'; }, nodelist);
      result.should.deep.equal([
        {id: 'apple'},
        {current: true, id: 'orange'}
      ]);
    });

    it('should work recursively', function () {
      var nodelist = [
        {id: 'fruit', nodelist: [{id: 'orange'}]},
        {id: 'vegetable', nodelist: [{current: true, id: 'carrot'}]}
      ];
      var result = T.toggle('nodelist', 'current', function (n) { return n.id === 'orange'; }, nodelist);
      result.should.deep.equal([
        {id: 'fruit', nodelist: [{current: true, id: 'orange'}]},
        {id: 'vegetable', nodelist: [{id: 'carrot'}]}
      ]);
    });

    it('should not change when not needed', function () {
      var nodelist = [
        {id: 'fruit', nodelist: [{id: 'orange'}]},
        {id: 'vegetable', nodelist: [{current: true, id: 'carrot'}]}
      ];
      var result = T.toggle('nodelist', 'current', function (n) { return n.id === 'carrot'; }, nodelist);
      result.should.deep.equal([
        {id: 'fruit', nodelist: [{id: 'orange'}]},
        {id: 'vegetable', nodelist: [{current: true, id: 'carrot'}]}
      ]);
    });
  });
});

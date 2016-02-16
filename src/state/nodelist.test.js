/* eslint-env amd, mocha */

(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}([
  './nodelist'
], function (T) {
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
    });
  });
}));

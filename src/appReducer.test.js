/* eslint-env amd, mocha */

// ToDo: also run test in browser
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
  './appReducer'
], function (appReducer) {
  describe('appReducer', function () {
    it('should handle setState', function () {
      var action = {
        type: 'SET_STATE',
        state: {
          some: 'state'
        }
      };
      var state = appReducer(undefined, action);
      state.should.deep.equal({some: 'state'});
    });
  });
}));

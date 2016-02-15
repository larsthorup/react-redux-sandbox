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
    describe('setState', function () {
      it('should replace the state', function () {
        var action = {
          type: 'SET_STATE',
          state: {
            some: 'state'
          }
        };
        var previousState;
        var state = appReducer(previousState, action);
        state.should.deep.equal({some: 'state'});
      });
    });
    describe('tree.setCurrentNode', function () { // ToDo: modular reducers
      it('should move current flag to specified node', function () {
        var action = {
          type: 'TREE.SET_CURRENT_NODE',
          id: 'orange'
        };
        var previousState = {
          nodes: [
            {current: true, id: 'apple'},
            {id: 'orange'}
          ]
        };
        var state = appReducer(previousState, action);
        state.should.deep.equal({
          nodes: [
            {id: 'apple'},
            {current: true, id: 'orange'}
          ]
        });
        // ToDo: verify that unchanged branches stays as the original object references
      });
    });
  });
}));

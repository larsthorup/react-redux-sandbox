/* eslint-env mocha */

var actionHelper = require('./actionHelper');

describe('actionHelper', function () {
  describe('makeActionCreators', function () {
    it('should make simple action creators', function () {
      var A = actionHelper.makeActionCreators(['ADD_STATE']);
      var action = A.addState({ state: 'someState' });
      action.should.deep.equal({ type: 'ADD_STATE', payload: { state: 'someState' } });
    });

    it('should make async action creators', function () {
      function asyncActionCreator () { }
      var A = actionHelper.makeActionCreators([asyncActionCreator]);
      A.asyncActionCreator.should.equal(asyncActionCreator);
    });
  });
});

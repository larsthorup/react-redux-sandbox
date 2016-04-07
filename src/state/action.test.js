/* eslint-env mocha */

var sinon = require('sinon');
var A = require('./action');

describe('action', function () {
  describe('fetchingState', function () {
    beforeEach(function () {
      // this.sinon = sinon.sandbox.create();
      // this.sinon.stub(global, 'fetch').andReturn
      // ToDo: use fetch-mock
      global.fetch = function () {
        return Promise.resolve({
          json: function () {
            return Promise.resolve({valid: 'json'});
          }
        });
      };
    });
    afterEach(function () {
      // this.sinon.restore();
      delete global.fetch;
    });
    it('should dispatch requestState and receiveState events', function () {
      var dispatch = sinon.spy();
      return A.fetchingState({name: 'food'})(dispatch).then(function () {
        dispatch.getCall(0).args.should.deep.equal([{type: 'REQUEST_STATE', payload: {name: 'food'}}]);
        dispatch.getCall(1).args.should.deep.equal([{type: 'RECEIVE_STATE', payload: {name: 'food', json: {valid: 'json'}}}]);
        dispatch.callCount.should.equal(2);
      });
    });
  });
});

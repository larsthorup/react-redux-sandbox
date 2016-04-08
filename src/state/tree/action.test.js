/* eslint-env mocha */

var sinon = require('sinon');
var fetchMock = require('fetch-mock');
var A = require('./action');

describe('action', function () {
  describe('fetchingState', function () {
    beforeEach(function () {
      fetchMock.mock('data/food.json', {valid: 'json'});
    });

    afterEach(function () {
      fetchMock.restore();
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

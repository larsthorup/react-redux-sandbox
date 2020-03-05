/* eslint-env mocha */

var sinon = require('sinon');
var fetchMock = require('fetch-mock');
var A = require('./action');

describe('auth/action', function () {
  describe('authAuthenticating', function () {
    beforeEach(function () {
      fetchMock.mock('data/auth-john.json', { success: true });
    });

    afterEach(function () {
      fetchMock.restore();
    });

    it('should dispatch authRequest and authSuccess events', function () {
      var dispatch = sinon.spy();
      return A.authAuthenticating({ credential: { userName: 'john' } })(dispatch).then(function () {
        dispatch.getCall(0).args.should.deep.equal([{ type: 'AUTH_REQUEST', payload: { credential: { userName: 'john' } } }]);
        dispatch.getCall(1).args.should.deep.equal([{ type: 'AUTH_SUCCESS', payload: { credential: { userName: 'john' }, json: { success: true } } }]);
        dispatch.callCount.should.equal(2);
      });
    });
  });
});

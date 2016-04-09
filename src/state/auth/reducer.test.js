/* eslint-env mocha */

var sinon = require('sinon');
var route = require('../../route');
var A = require('./action');
var reducer = require('./reducer');

describe('auth/reducer', function () {
  beforeEach(function () {
    this.sinon = sinon.sandbox.create();
    this.historyOld = route.history;
    route.history = {
      push: sinon.spy()
    };
    // this.sinon.stub(route.history, 'push'); // ToDo: Trying to stub property 'push' of undefined
  });

  afterEach(function () {
    route.history = this.historyOld;
    this.sinon.restore();
  });

  describe('authSuccess', function () {
    it('should set isAuthenticated and navigate to root', function () {
      var action = A.authSuccess();
      var state = reducer(null, action);
      state.isAuthenticated.should.equal(true);
      route.history.push.lastCall.args.should.deep.equal(['/']);
    });
  });
});

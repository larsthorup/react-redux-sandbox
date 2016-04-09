/* eslint-env mocha */

var React = require('react');
var jsnox = require('jsnox');
var sinon = require('sinon');
var sd = require('skin-deep');
var Auth = require('./auth');

var d = jsnox(React);

describe('container/auth', function () {
  describe('view', function () {
    it('should create buttons for missing trees', function () {
      var authAuthenticating = sinon.spy();
      var model = {authAuthenticating: authAuthenticating};
      var view = d(Auth.View, model);
      var dom = sd.shallowRender(view);
      var buttons = dom.everySubTree('button');
      buttons.length.should.equal(1);
      buttons[0].props.onClick();
      authAuthenticating.lastCall.args.should.deep.equal([{credential: {userName: 'lars'}}]);
    });
  });
  describe('mapStateToProps', function () {
    it('should return the proper sub state', function () {
      Auth.mapStateToProps({}).should.deep.equal({});
    });
  });
});

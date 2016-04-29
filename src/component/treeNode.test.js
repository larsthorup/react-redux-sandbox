/* eslint-env mocha */

var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
var React = require('react');
var sd = require('skin-deep');
var TreeNode = require('./treeNode');

var h = React.createElement;

describe('TreeNode', function () {
  describe('render', function () {
    describe('not current', function () {
      it('should create a span with the node text', function () {
        var model = {id: 'node', text: 'aNodeText'};
        var view = h(TreeNode, model);
        var span = sd.shallowRender(view).subTree('span');
        span.text().should.equal('aNodeText');
        should.not.exist(span.props.className);
      });
    });

    describe('current', function () {
      it('should mark the span current', function () {
        var model = {current: true, id: 'node', text: 'aNodeText'};
        var view = h(TreeNode, model);
        var span = sd.shallowRender(view).subTree('span');
        span.props.className.should.equal('current');
      });
    });
  });
  describe('setCurrentNode', function () {
    it('should invoke props callback', function () {
      var model = {id: 'node', text: 'aNodeText', setCurrentNode: sinon.spy()};
      var view = h(TreeNode, model);
      var span = sd.shallowRender(view).subTree('span');
      span.props.onClick();
      model.setCurrentNode.calledWith().should.equal(true);
    });
  });
});

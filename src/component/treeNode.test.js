/* eslint-env mocha */
/* global should */

var React = require('react');
var jsnox = require('jsnox');
var sd = require('skin-deep');
var TreeNode = require('./treeNode');
var d = jsnox(React);

describe('TreeNode', function () {
  describe('render', function () {
    describe('not current', function () {
      it('should create a span with the node text', function () {
        var model = {id: 'node', text: 'aNodeText'};
        var view = d(TreeNode, model);
        var span = sd.shallowRender(view).subTree('span');
        span.text().should.equal('aNodeText');
        should.not.exist(span.props.className);
      });
    });

    describe('current', function () {
      it('should mark the span current', function () {
        var model = {current: true, id: 'node', text: 'aNodeText'};
        var view = d(TreeNode, model);
        var span = sd.shallowRender(view).subTree('span');
        span.props.className.should.equal('current');
      });
    });
  });
  it('setCurrentNode');
});

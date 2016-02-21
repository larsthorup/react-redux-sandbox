/* eslint-env mocha */

var React = require('react');
var jsnox = require('jsnox');
var sd = require('skin-deep');
var Tree = require('./tree');

var d = jsnox(React);

describe('Tree', function () {
  describe('View', function () {
    it('should create a div with a tree node list', function () {
      var model = {nodes: []};
      var view = d(Tree.View, model);
      var div = sd.shallowRender(view).subTree('div').subTree('TreeNodeList');
      div.props.nodes.should.equal(model.nodes);
    });
  });

  describe('mapStateToProps', function () {
    it('should return the proper sub state', function () {
      var state = {nodes: []};
      var props = Tree.mapStateToProps(state);
      props.should.deep.equal({nodes: []});
    });
  });
});

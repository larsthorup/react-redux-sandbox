/* eslint-env mocha */

var React = require('react');
var sd = require('skin-deep');
var Tree = require('./tree');

var h = React.createElement;

describe('Tree', function () {
  it('should create a div with a tree node list', function () {
    var model = { nodes: [] };
    var view = h(Tree, model);
    var dom = sd.shallowRender(view);
    var treeNodeDiv = dom.subTree('TreeNodeList');
    treeNodeDiv.props.nodes.should.equal(model.nodes);
  });
});

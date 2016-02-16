/* eslint-env mocha */

// ToDo: also run test in browser
var React = require('react');
var jsnox = require('jsnox');
var sd = require('skin-deep');
var Tree = require('./tree');

var d = jsnox(React);

describe('Tree.View', function () {
  it('should create a div with a tree node list', function () {
    var model = {nodes: []};
    var view = d(Tree.View, model);
    var div = sd.shallowRender(view).subTree('div').subTree('TreeNodeList');
    div.props.nodes.should.equal(model.nodes);
  });
});

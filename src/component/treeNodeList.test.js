/* eslint-env mocha */

var React = require('react');
var jsnox = require('jsnox');
var sd = require('skin-deep');
var TreeNodeList = require('./treeNodeList');

var d = jsnox(React);

describe('TreeNodeList', function () {
  it('should create an empty <ul> when no nodes', function () {
    var model = {nodes: []};
    var view = d(TreeNodeList, model);
    var ul = sd.shallowRender(view).subTree('ul');
    ul.props.children.should.deep.equal([]);
  });

  it('should create an empty <ul> with an <li> with a node view for each node without children', function () {
    var model = {nodes: [{id: '1', text: 'node1text'}, {id: '2', text: 'node2text'}]};
    var view = d(TreeNodeList, model);
    var li = sd.shallowRender(view).subTree('ul').everySubTree('li');
    li[0].subTree('TreeNode').props.text.should.equal('node1text');
    li[1].subTree('TreeNode').props.text.should.equal('node2text');
  });

  it('should include a tree node list view in the <li> with the children of this node', function () {
    var model = {nodes: [{id: 'top', text: 'node1text', nodes: [{id: 'sub', text: 'subNodeText'}]}]};
    var view = d(TreeNodeList, model);
    var treeNodeListView = sd.shallowRender(view).subTree('ul').subTree('li').subTree('TreeNodeList');
    treeNodeListView.props.nodes.should.deep.equal([{id: 'sub', text: 'subNodeText'}]);
  });
});

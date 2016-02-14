/* eslint-env amd, mocha */

(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}([
  'react',
  'jsnox',
  'react-addons-test-utils',
  './treeNodeListView',
  './treeNodeView'
], function (React, jsnox, ReactTestUtils, TreeNodeListView, TreeNodeView) {
  var d = jsnox(React);

  describe('TreeNodeListView', function () {
    it('should create an empty <ul> when no nodes', function () {
      var model = {};
      var view = d(TreeNodeListView, model);
      // ToDo: refactor
      var renderer = ReactTestUtils.createRenderer();
      renderer.render(view);
      var sdom = renderer.getRenderOutput();
      sdom.type.should.equal('ul');
      sdom.props.children.should.deep.equal([]);
    });

    it('should create an empty <ul> with an <li> with a node view for each node without children', function () {
      var model = {nodes: [{id: '1', text: 'node1text'}, {id: '2', text: 'node2text'}]};
      var view = d(TreeNodeListView, model);
      // ToDo: refactor
      var renderer = ReactTestUtils.createRenderer();
      renderer.render(view);
      var sdom = renderer.getRenderOutput();
      // ToDo: use rquery?
      sdom.type.should.equal('ul');
      sdom.props.children[0].type.should.equal('li');
      sdom.props.children[0].props.children[0].type.should.equal(TreeNodeView);
      sdom.props.children[0].props.children[0].props.text.should.equal('node1text');
      sdom.props.children[1].props.children[0].type.should.equal(TreeNodeView);
      sdom.props.children[1].props.children[0].props.text.should.equal('node2text');
    });

    it('should include a tree node list view in the <li> with the children of this node', function () {
      var model = {nodes: [{id: 'top', text: 'node1text', nodes: [{id: 'sub', text: 'subNodeText'}]}]};
      var view = d(TreeNodeListView, model);
      // ToDo: refactor
      var renderer = ReactTestUtils.createRenderer();
      renderer.render(view);
      var sdom = renderer.getRenderOutput();
      // ToDo: use rquery?
      sdom.type.should.equal('ul');
      sdom.props.children[0].type.should.equal('li');
      sdom.props.children[0].props.children[0].type.should.equal(TreeNodeView);
      sdom.props.children[0].props.children[0].props.text.should.equal('node1text');
      sdom.props.children[0].props.children[0].props.nodes.should.deep.equal([{id: 'sub', text: 'subNodeText'}]);
    });
  });
}));

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
  'skin-deep',
  './treeNodeListView'
], function (React, jsnox, sd, TreeNodeListView) {
  var d = jsnox(React);

  describe('TreeNodeListView', function () {
    it('should create an empty <ul> when no nodes', function () {
      var model = {nodes: []};
      var view = d(TreeNodeListView, model);
      var ul = sd.shallowRender(view).subTree('ul');
      ul.props.children.should.deep.equal([]);
    });

    it('should create an empty <ul> with an <li> with a node view for each node without children', function () {
      var model = {nodes: [{id: '1', text: 'node1text'}, {id: '2', text: 'node2text'}]};
      var view = d(TreeNodeListView, model);
      var li = sd.shallowRender(view).subTree('ul').everySubTree('li');
      li[0].subTree('TreeNodeView').props.text.should.equal('node1text');
      li[1].subTree('TreeNodeView').props.text.should.equal('node2text');
    });

    it('should include a tree node list view in the <li> with the children of this node', function () {
      var model = {nodes: [{id: 'top', text: 'node1text', nodes: [{id: 'sub', text: 'subNodeText'}]}]};
      var view = d(TreeNodeListView, model);
      var treeNodeListView = sd.shallowRender(view).subTree('ul').subTree('li').subTree('TreeNodeListView');
      treeNodeListView.props.nodes.should.deep.equal([{id: 'sub', text: 'subNodeText'}]);
    });
  });
}));

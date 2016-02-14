/* eslint-env amd, mocha */

// ToDo: also run test in browser
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
  './treeview'
], function (React, jsnox, ReactTestUtils, TreeView) {
  var d = jsnox(React);

  describe('TreeView', function () {
    it('should create an empty tree', function () {
      var view = d(TreeView, {nodes: []});
      var renderer = ReactTestUtils.createRenderer();
      renderer.render(view);
      var sdom = renderer.getRenderOutput();
      sdom.type.should.equal('div');
      // sdom.props.children.type.should.equal(NodeListView);
      sdom.props.children.props.nodes.should.deep.equal([]);
    });
  });
}));

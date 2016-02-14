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
  'react-dom/server',
  'jsnox',
  'react-addons-test-utils',
  './treeNodeView'
], function (React, ReactDomServer, jsnox, ReactTestUtils, TreeNodeView) {
  var d = jsnox(React);

  describe('TreeNodeView', function () {
    it('should create a span with the node text', function () {
      var model = {id: 'node', text: 'aNodeText'};
      var view = d(TreeNodeView, model);
      // ToDo: refactor
      var renderer = ReactTestUtils.createRenderer();
      renderer.render(view);
      var sdom = renderer.getRenderOutput();
      sdom.type.should.equal('span');
      sdom.props.children.should.equal('aNodeText');
    });

    it('should render complete markup', function () {
      var model = {id: 'node', text: 'aNodeText'};
      var view = d(TreeNodeView, model);
      ReactDomServer.renderToStaticMarkup(view).should.equal('<span>aNodeText</span>');
    });
  });
}));

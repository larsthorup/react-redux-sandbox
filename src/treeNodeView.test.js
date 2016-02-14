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
  './treeNodeView'
], function (React, jsnox, sd, TreeNodeView) {
  var d = jsnox(React);

  describe('TreeNodeView', function () {
    it('should create a span with the node text', function () {
      var model = {id: 'node', text: 'aNodeText'};
      var view = d(TreeNodeView, model);
      var span = sd.shallowRender(view).subTree('span');
      span.text().should.equal('aNodeText');
    });
  });
}));

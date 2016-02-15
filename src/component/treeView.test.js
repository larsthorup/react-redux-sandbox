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
  'skin-deep',
  './treeView'
], function (React, jsnox, sd, TreeView) {
  var d = jsnox(React);

  describe('TreeView', function () {
    it('should create a div with a tree node list', function () {
      var model = {nodes: []};
      var view = d(TreeView, model);
      var div = sd.shallowRender(view).subTree('div').subTree('TreeNodeListView');
      div.props.nodes.should.equal(model.nodes);
    });
  });
}));

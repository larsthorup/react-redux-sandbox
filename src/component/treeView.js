/* eslint-env browser, amd */
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
  './treeNodeListView'
], function (React, jsnox, TreeNodeListView) {
  var d = jsnox(React);

  function TreeView (props) {
    var nodeListView = React.createElement(TreeNodeListView, props);
    return d('div', null, nodeListView);
  }

  TreeView.propTypes = {
    // ToDo: avoid Warning: Failed propType: Required prop `nodes` was not specified in `TreeView`. Check the render method of `RouterContext`.
    // nodes: React.PropTypes.array.isRequired
  };

  return TreeView;
}));

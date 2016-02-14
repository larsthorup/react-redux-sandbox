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
  './treeNodeView'
], function (React, jsnox, TreeNodeView) {
  var d = jsnox(React);

  function TreeNodeListView (props) {
    // ToDo: extract component for list item
    var listItems = props.nodes ? props.nodes.map(function (node) {
      var nodeView = d(TreeNodeView, Object.assign({}, node, {key: 'node'}));
      var childView = node.nodes ? d(TreeNodeListView, Object.assign({}, node, {key: 'nodelist'})) : null;
      var nodeAndChildren = childView ? [nodeView, childView] : [nodeView];
      return d('li', {key: node.id}, nodeAndChildren);
    }) : [];
    return d('ul', null, listItems);
  }

  TreeNodeListView.propTypes = {
    nodes: React.PropTypes.array.isRequired
  };

  return TreeNodeListView;
}));

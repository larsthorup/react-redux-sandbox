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
  './treeNode'
], function (React, jsnox, TreeNode) {
  var d = jsnox(React);

  function TreeNodeList (props) {
    // ToDo: extract component for list item
    var listItems = props.nodes ? props.nodes.map(function (node) {
      var nodeView = d(TreeNode, Object.assign({}, node, {key: 'node', setCurrentNode: props.setCurrentNode})); // ToDo: how to add relevant actions?
      var childView = node.nodes ? d(TreeNodeList, Object.assign({}, node, {key: 'nodelist'})) : null;
      var nodeAndChildren = childView ? [nodeView, childView] : [nodeView];
      return d('li', {key: node.id}, nodeAndChildren);
    }) : [];
    return d('ul', null, listItems);
  }

  TreeNodeList.propTypes = {
    nodes: React.PropTypes.array.isRequired
  };

  return TreeNodeList;
}));

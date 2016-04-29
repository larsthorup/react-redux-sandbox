var React = require('react');
var TreeNode = require('./treeNode');

var h = React.createElement;

function TreeNodeList (props) {
  // ToDo: extract component for list item
  var listItems = props.nodes.map(function (node) {
    var actions = {setCurrentNode: props.setCurrentNode}; // ToDo: how to add all relevant actions?
    var nodeView = h(TreeNode, Object.assign({}, node, {key: 'node'}, actions));
    var childView = node.nodes ? h(TreeNodeList, Object.assign({}, node, {key: 'nodelist'}, actions)) : null;
    var nodeAndChildren = childView ? [nodeView, childView] : [nodeView];
    return h('li', {key: node.id}, nodeAndChildren);
  });
  return h('ul', null, listItems);
}

TreeNodeList.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

module.exports = TreeNodeList;

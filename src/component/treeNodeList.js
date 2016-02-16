var React = require('react');
var jsnox = require('jsnox');
var TreeNode = require('./treeNode');

var d = jsnox(React);

function TreeNodeList (props) {
  // ToDo: extract component for list item
  var listItems = props.nodes ? props.nodes.map(function (node) {
    var actions = {setCurrentNode: props.setCurrentNode}; // ToDo: how to add all relevant actions?
    var nodeView = d(TreeNode, Object.assign({}, node, {key: 'node'}, actions));
    var childView = node.nodes ? d(TreeNodeList, Object.assign({}, node, {key: 'nodelist'}, actions)) : null;
    var nodeAndChildren = childView ? [nodeView, childView] : [nodeView];
    return d('li', {key: node.id}, nodeAndChildren);
  }) : [];
  return d('ul', null, listItems);
}

TreeNodeList.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

module.exports = TreeNodeList;

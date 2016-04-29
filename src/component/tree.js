var React = require('react');
var TreeNodeList = require('./treeNodeList');

var h = React.createElement;

function Tree (props) {
  return h('div', null, h(TreeNodeList, props));
}

Tree.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

module.exports = Tree;

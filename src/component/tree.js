var React = require('react');
var PropTypes = require('prop-types');
var TreeNodeList = require('./treeNodeList');

var h = React.createElement;

function Tree (props) {
  return h('div', null, h(TreeNodeList, props));
}

Tree.propTypes = {
  nodes: PropTypes.array.isRequired
};

module.exports = Tree;

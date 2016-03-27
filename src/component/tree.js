var React = require('react');
var jsnox = require('jsnox');
var TreeNodeList = require('./treeNodeList');

var d = jsnox(React);

function Tree (props) {
  return d('div', null, d(TreeNodeList, props));
}

Tree.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

module.exports = Tree;

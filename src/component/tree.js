var React = require('react');
var jsnox = require('jsnox');
var ReactRedux = require('react-redux');
var Action = require('../appActions');
var TreeNodeList = require('./treeNodeList');

var d = jsnox(React);
var connect = ReactRedux.connect;

function Tree (props) {
  var nodeListView = React.createElement(TreeNodeList, props);
  return d('div', null, nodeListView);
}

Tree.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

function mapStateToProps (state) {
  // ToDo: extract sub state needed by this component
  // ToDo: how to extract different substates for different component instances?
  return state;
}

var Container = connect(mapStateToProps, Action)(Tree);

module.exports = {
  View: Tree,
  Container: Container
};

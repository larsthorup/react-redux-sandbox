/* eslint-env react */
/* global React jsnox */

var d = jsnox(React);

function NodeView (props) {
  return d('span', null, props.text);
}

NodeView.propTypes = {
  text: React.PropTypes.string.isRequired
};

function NodeListView (props) {
  var listItems = props.nodes ? props.nodes.map(function (node) {
    var nodeView = d(NodeView, Object.assign({}, node, {key: 'node'}));
    var childView = node.nodes ? d(NodeListView, Object.assign({}, node, {key: 'nodelist'})) : null;
    var nodeAndChildren = childView ? [nodeView, childView] : [nodeView];
    return d('li', {key: node.id}, nodeAndChildren);
  }) : [];
  return d('ul', null, listItems);
}

NodeListView.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

window.TreeView = function (props) {
  var nodeListView = React.createElement(NodeListView, props);
  return d('div', null, nodeListView);
};

NodeListView.propTypes = {
  nodes: React.PropTypes.array.isRequired
};


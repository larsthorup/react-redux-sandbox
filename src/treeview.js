/* eslint-env react */
/* global React */

function NodeView (props) {
  return React.createElement('span', null, props.text); // ToDo: use jnosx
}

NodeView.propTypes = {
  text: React.PropTypes.string.isRequired
};

function NodeListView (props) {
  var listItems = props.nodes ? props.nodes.map(function (node) {
    var nodeView = React.createElement(NodeView, Object.assign({}, node, {key: 'node'}));
    var childView = node.nodes ? React.createElement(NodeListView, Object.assign({}, node, {key: 'nodelist'})) : null;
    var nodeAndChildren = childView ? [nodeView, childView] : [nodeView];
    return React.createElement('li', {key: node.id}, nodeAndChildren);
  }) : [];
  return React.createElement('ul', null, listItems);
}

NodeListView.propTypes = {
  nodes: React.PropTypes.array.isRequired
};

window.TreeView = function (props) {
  var nodeListView = React.createElement(NodeListView, props);
  return React.createElement('div', null, nodeListView);
};

NodeListView.propTypes = {
  nodes: React.PropTypes.array.isRequired
};


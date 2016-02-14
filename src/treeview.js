/* eslint-env browser, amd, react  */
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
  'jsnox'
], function (React, jsnox) {
  var d = jsnox(React);

  function NodeView (props) {
    return d('span', null, props.text);
  }

  NodeView.propTypes = {
    text: React.PropTypes.string.isRequired
  };

  function NodeListView (props) {
    // ToDo: extract component for list item
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

  function TreeView (props) {
    var nodeListView = React.createElement(NodeListView, props);
    return d('div', null, nodeListView);
  }

  TreeView.propTypes = {
    nodes: React.PropTypes.array.isRequired
  };

  return TreeView;
}));

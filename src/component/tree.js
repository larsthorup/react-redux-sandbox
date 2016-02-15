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
  'react-redux',
  './treeNodeList'
], function (React, jsnox, ReactRedux, TreeNodeList) {
  var d = jsnox(React);
  var connect = ReactRedux.connect;

  function Tree (props) {
    var nodeListView = React.createElement(TreeNodeList, props);
    return d('div', null, nodeListView);
  }

  Tree.propTypes = {
    nodes: React.PropTypes.array.isRequired
  };

  var Container = connect(function (state) {
    // ToDo: extract sub state needed by this component
    return state;
  })(Tree);

  return {
    View: Tree,
    Container: Container
  };
}));

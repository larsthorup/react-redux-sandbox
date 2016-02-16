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
  '../appActions',
  './treeNodeList'
], function (React, jsnox, ReactRedux, Action, TreeNodeList) {
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

  return {
    View: Tree,
    Container: Container
  };
}));

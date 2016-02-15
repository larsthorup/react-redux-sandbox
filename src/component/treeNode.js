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
  'jsnox'
], function (React, jsnox) {
  var d = jsnox(React);

  function TreeNode (props) {
    var spanProps = {
      onClick: function () {
        props.setCurrentNode(props.id);
      }
    };
    if (props.current) {
      spanProps.className = 'current';
    }
    return d('span', spanProps, props.text);
  }

  TreeNode.propTypes = {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  };

  return TreeNode;
}));

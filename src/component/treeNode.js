var React = require('react');

var h = React.createElement;

function TreeNode (props) {
  var spanProps = {
    onClick: function () {
      props.setCurrentNode(props.id);
    }
  };
  if (props.current) {
    spanProps.className = 'current';
  }
  return h('span', spanProps, props.text);
}

TreeNode.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

module.exports = TreeNode;

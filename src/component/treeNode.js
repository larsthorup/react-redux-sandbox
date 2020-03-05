var React = require('react');
var PropTypes = require('prop-types');

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
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

module.exports = TreeNode;

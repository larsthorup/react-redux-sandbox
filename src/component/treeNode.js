var React = require('react');
var jsnox = require('jsnox');

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

module.exports = TreeNode;

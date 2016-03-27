var React = require('react');
var jsnox = require('jsnox');
var ReactRedux = require('react-redux');
var Action = require('../appActions');
var Tree = require('../component/tree');

var d = jsnox(React);
var connect = ReactRedux.connect;

function Home (props) {
  // ToDo: how to select and propagate relevant actions?
  // ToDo: how to add action context up the component path
  return d('div', null, [
    d('p', {key: 'foodHeader'}, 'Food'),
    // ToDo: assocKey(key, props)
    d(Tree, Object.assign({}, {key: 'food'}, {setCurrentNode: props.setCurrentNode}, props.food)),
    // ToDo: does plain HTML elements need a key?
    d('h2', {key: 'placeHeader'}, 'Places'),
    d(Tree, Object.assign({}, {key: 'place'}, {setCurrentNode: props.setCurrentNode}, props.place))
  ]);
}

Home.propTypes = {
  food: React.PropTypes.object.isRequired,
  place: React.PropTypes.object.isRequired
};

function mapStateToProps (state) {
  // ToDo: extract sub state needed by this component
  // ToDo: how to extract different substates for different component instances?
  return state;
}

var Container = connect(mapStateToProps, Action)(Home);

module.exports = {
  View: Home,
  Container: Container,
  mapStateToProps: mapStateToProps
};

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
    // ToDo: generic props.setCurrent('food')
    d(Tree, Object.assign({}, {key: 'food'}, {setCurrentNode: props.setCurrentFood}, props.food)),
    // ToDo: does plain HTML elements need a key?
    d('p', {key: 'placeHeader'}, 'Places'),
    d(Tree, Object.assign({}, {key: 'place'}, {setCurrentNode: props.setCurrentPlace}, props.place))
  ]);
}

Home.propTypes = {
  food: React.PropTypes.object.isRequired,
  place: React.PropTypes.object.isRequired
};

function mapStateToTreeNodeListProps (options) {
  var treeNodeListProps = options.nodeIds.map(function (nodeId) {
    var node = options.state.entities[options.entity][nodeId];
    var id = {id: nodeId};
    var nodeIds = node[options.childProp];
    var nodes = nodeIds && nodeIds.length > 0 ? {
      nodes: mapStateToTreeNodeListProps(Object.assign({}, options, {
        nodeIds: nodeIds
      }))
    } : {};
    var current = nodeId === options.state.current[options.entity] ? {current: true} : {};
    return Object.assign(id, nodes, current, options.mapNode(node));
  });
  return treeNodeListProps;
}

function mapStateToTreeProps (options) {
  options.nodeIds = options.state.roots[options.entity];
  var treeProps = {
    nodes: mapStateToTreeNodeListProps(options)
  };
  return treeProps;
}

function mapStateToProps (state) {
  // ToDo: use memoization to minimize re-rendering
  var homeProps = {
    food: mapStateToTreeProps({
      state: state,
      entity: 'food',
      childProp: 'subtypes',
      mapNode: function (food) { return {text: food.name}; }
    }),
    place: mapStateToTreeProps({
      state: state,
      entity: 'place',
      childProp: 'places',
      mapNode: function (place) { return {text: place.name}; }
    })
  };
  return homeProps;
}

var Container = connect(mapStateToProps, Action)(Home);

module.exports = {
  View: Home,
  Container: Container,
  mapStateToProps: mapStateToProps
};

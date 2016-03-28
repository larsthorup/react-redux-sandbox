var React = require('react');
var jsnox = require('jsnox');
var ReactRedux = require('react-redux');
var A = require('../state/action');
var Tree = require('../component/tree');

var d = jsnox(React);
var connect = ReactRedux.connect;

function makeTreeProps (homeProps, entity) {
  var key = {key: entity};
  var setCurrentNode = {setCurrentNode: homeProps.setCurrent(entity)};
  var entityProps = homeProps[entity];
  return Object.assign({}, key, setCurrentNode, entityProps);
}

function Home (props) {
  return d('div', null, [
    d('p', {key: 'foodHeader'}, 'Food'),
    d(Tree, makeTreeProps(props, 'food')),
    d('p', {key: 'placeHeader'}, 'Places'),
    d(Tree, makeTreeProps(props, 'place'))
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
    var current = nodeId === options.state.entities.tree[options.entity].current ? {current: true} : {};
    return Object.assign(id, nodes, current, options.mapNode(node));
  });
  return treeNodeListProps;
}

function mapStateToTreeProps (options) {
  options.nodeIds = options.state.entities.tree[options.entity].roots;
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

function mapDispatchToProps (dispatch) {
  return {
    setCurrent: function (entity) {
      var actionCreator = A.setCurrent(entity);
      var dispatcher = function (id) {
        var action = actionCreator(id);
        dispatch(action);
      };
      return dispatcher;
    }
  };
}

var Container = connect(mapStateToProps, mapDispatchToProps)(Home);

module.exports = {
  View: Home,
  Container: Container,
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps
};

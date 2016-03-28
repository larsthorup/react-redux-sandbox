var React = require('react');
var jsnox = require('jsnox');
var ReactRedux = require('react-redux');
var A = require('../state/action');
var Tree = require('../component/tree');

var d = jsnox(React);
var connect = ReactRedux.connect;

function makeTreeProps (treeProps, entity, homeProps) {
  var key = {key: entity};
  var setCurrentNode = {setCurrentNode: homeProps.setCurrent(entity)};
  return Object.assign({}, key, setCurrentNode, treeProps);
}

function Home (props) {
  var elems = [];
  for (var i = 0; i < props.entities.length; ++i) {
    var entityProps = props.entities[i];
    var entity = entityProps.entity;
    elems = elems.concat([
      d('p', {key: entity + 'Header'}, entity),
      d(Tree, makeTreeProps(entityProps.tree, entity, props))
    ]);
  }
  return d('div', null, elems);
}

Home.propTypes = {
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
  return {entity: options.entity, tree: treeProps};
}

var childProp = {
  'food': 'subtypes',
  'place': 'places'
};

var mapNode = {
  'food': function (food) { return {text: food.name}; },
  'place': function (place) { return {text: place.name}; }
};

function mapStateToProps (state) {
  // ToDo: use memoization to minimize re-rendering
  var homeProps = {
    entities: Object.keys(state.entities.tree).map(function (entity) {
      return mapStateToTreeProps({
        state: state,
        entity: entity,
        childProp: childProp[entity],
        mapNode: mapNode[entity]
      });
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

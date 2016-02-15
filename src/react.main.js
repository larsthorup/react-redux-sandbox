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
  'react-dom',
  'react-router',
  'jsnox',
  'redux',
  'react-redux',
  './appReducer',
  './appRoutes'
], function (React, ReactDOM, ReactRouter, jsnox, Redux, ReactRedux, appReducer, appRoutes) {
  var d = jsnox(React);
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var createStore = Redux.createStore;
  var Provider = ReactRedux.Provider;

  function App (props) {
    return props.children;
  }

  function main () {
    var store = createStore(appReducer);
    store.dispatch({
      type: 'SET_STATE',
      state: {
        nodes: [
          {id: 'vegetable', text: 'Vegetable', nodes: [
            {id: 'fruit', text: 'Fruit', nodes: [
              {id: 'apple', text: 'Apple'},
              {id: 'orange', text: 'Orange'}
            ]}]
          },
          {id: 'meat', text: 'Meat', nodes: [
            {id: 'beef', text: 'Beef'},
            {id: 'lamb', text: 'Lamb'}
          ]}
        ]
      }
    });

    var appRouter = d(Router, d(Route, {component: App}, appRoutes));
    var appProvider = d(Provider, {store: store}, appRouter);
    var appElement = document.getElementById('app');
    ReactDOM.render(appProvider, appElement);
  }

  return main;
}));

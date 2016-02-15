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
  './appRoutes',
  './appView'
], function (React, ReactDOM, ReactRouter, jsnox, Redux, ReactRedux, appReducer, appRoutes, AppView) {
  var d = jsnox(React);
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var createStore = Redux.createStore;
  var Provider = ReactRedux.Provider;

  function main () {
    var store = createStore(appReducer);
    var appRouter = d(Router, d(Route, {component: AppView}, appRoutes));
    var appProvider = d(Provider, {store: store}, appRouter);
    var appElement = document.getElementById('app');
    ReactDOM.render(appProvider, appElement);
  }

  return main;
}));

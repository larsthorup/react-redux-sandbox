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
  './appRoutes',
  './component/appView'
], function (React, ReactDOM, ReactRouter, jsnox, appRoutes, AppView) {
  var d = jsnox(React);
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  function main () {
    var appRouter = d(Router, d(Route, {component: AppView}, appRoutes));
    var appElement = document.getElementById('app');
    ReactDOM.render(appRouter, appElement);
  }

  return main;
}));

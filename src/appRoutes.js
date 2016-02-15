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
  'react-router',
  'jsnox',
  './component/treeView'
], function (React, ReactRouter, jsnox, TreeView) {
  var d = jsnox(React);
  var Route = ReactRouter.Route;

  var appRoutes = [
    // ToDo: avoid warning from react when leaving out key here
    d(Route, {key: '/', path: '/', component: TreeView})
  ];

  return appRoutes;
}));

var React = require('react');
var ReactRouter = require('react-router');
var jsnox = require('jsnox');
var Home = require('./container/home');
var d = jsnox(React);
var Route = ReactRouter.Route;

var appRoutes = [
  // ToDo: define the routing in the component, just like the state mapping
  // ToDo: avoid warning from react when leaving out key here
  d(Route, {key: '/', path: '/', component: Home.Container})
];

module.exports = appRoutes;

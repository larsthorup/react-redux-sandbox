var React = require('react');
var ReactRouter = require('react-router');
var jsnox = require('jsnox');
var Home = require('./container/home');
var Auth = require('./container/auth');
var d = jsnox(React);
var Route = ReactRouter.Route;

// ToDo: consider using browserHistory over hashHistory
var history = ReactRouter.hashHistory;

var appRoutes = [
  // ToDo: define the routing in the component, just like the state mapping
  // ToDo: avoid warning from react when leaving out key here
  d(Route, {key: '/', path: '/', component: Home.Container}),
  d(Route, {key: '/auth', path: '/auth', component: Auth.Container})
];

module.exports = {
  appRoutes: appRoutes,
  history: history
};

var React = require('react');
var ReactRouter = require('react-router');
var Home = require('./container/home');
var Auth = require('./container/auth');
var h = React.createElement;
var Route = ReactRouter.Route;

// ToDo: consider using browserHistory over hashHistory
var history = ReactRouter.hashHistory;

var appRoutes = [
  // ToDo: define the routing in the component, just like the state mapping
  // ToDo: avoid warning from react when leaving out key here
  h(Route, {key: '/', path: '/', component: Home.Container}),
  h(Route, {key: '/auth', path: '/auth', component: Auth.Container})
];

module.exports = {
  appRoutes: appRoutes,
  history: history
};

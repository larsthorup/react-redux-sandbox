/* eslint-env browser */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redux = require('redux');
var thunk = require('redux-thunk').default;
var ReactRedux = require('react-redux');

require('./app.css');

var S = require('./state/state');
var A = require('./state/action');
var reducer = require('./state/reducer');
var route = require('./route');

var h = React.createElement;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createStore = Redux.createStore;
var applyMiddleware = Redux.applyMiddleware;
var Provider = ReactRedux.Provider;

function App (props) {
  return props.children;
}

function main () {
  var store = createStore(reducer, applyMiddleware(thunk));
  store.dispatch(A.setState({ state: S.initial() }));
  var router = h(Router, { history: route.history }, h(Route, { component: App }, route.appRoutes));
  var provider = h(Provider, { store: store }, router);
  var appElement = document.getElementById('app');
  ReactDOM.render(provider, appElement);
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});

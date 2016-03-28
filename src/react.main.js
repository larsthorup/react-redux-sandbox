/* eslint-env browser */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var jsnox = require('jsnox');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var A = require('./state/action');
var reducer = require('./state/reducer');
var route = require('./route');
var demoState = require('./state/demo');

var d = jsnox(React);
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;

function App (props) {
  return props.children;
}

function main () {
  var store = createStore(reducer);
  store.dispatch(A.setState(demoState));

  var router = d(Router, {history: ReactRouter.hashHistory}, d(Route, {component: App}, route));
  var provider = d(Provider, {store: store}, router);
  var appElement = document.getElementById('app');
  ReactDOM.render(provider, appElement);
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});

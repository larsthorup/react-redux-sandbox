/* eslint-env browser */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var jsnox = require('jsnox');
var Redux = require('redux');
var thunk = require('redux-thunk').default;
var ReactRedux = require('react-redux');
var S = require('./state/tree/state');
var A = require('./state/tree/action');
var reducer = require('./state/tree/reducer');
var route = require('./route');

var d = jsnox(React);
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
  store.dispatch(A.setState({state: S.initial()}));

  var router = d(Router, {history: ReactRouter.hashHistory}, d(Route, {component: App}, route));
  var provider = d(Provider, {store: store}, router);
  var appElement = document.getElementById('app');
  ReactDOM.render(provider, appElement);
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});

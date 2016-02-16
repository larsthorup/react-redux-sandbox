/* eslint-env browser */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var jsnox = require('jsnox');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var Action = require('./appActions');
var appReducer = require('./appReducer');
var appRoutes = require('./appRoutes');
var demoState = require('./demoState');

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
  store.dispatch(Action.setState(demoState));

  var appRouter = d(Router, {history: ReactRouter.hashHistory}, d(Route, {component: App}, appRoutes));
  var appProvider = d(Provider, {store: store}, appRouter);
  var appElement = document.getElementById('app');
  ReactDOM.render(appProvider, appElement);
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});

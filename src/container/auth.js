var React = require('react');
var jsnox = require('jsnox');
var ReactRedux = require('react-redux');
var A = require('../state/action');

var d = jsnox(React);
var connect = ReactRedux.connect;

function Auth (props) {
  return d('div', null, [
    d('button', {key: 'loginButton', onClick: function () { props.authAuthenticating({credential: {userName: 'lars'}}); }}, 'Login')
  ]);
}

function mapStateToProps (state) {
  return {};
}

var Container = connect(mapStateToProps, A)(Auth);

module.exports = {
  View: Auth,
  Container: Container,
  mapStateToProps: mapStateToProps
};

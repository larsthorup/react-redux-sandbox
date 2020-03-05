var React = require('react');
var ReactRedux = require('react-redux');
var A = require('../state/action');

var h = React.createElement;
var connect = ReactRedux.connect;

function Auth (props) {
  return h('div', null, [
    h('button', { key: 'loginButton', onClick: function () { props.authAuthenticating({ credential: { userName: 'lars' } }); } }, 'Login')
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

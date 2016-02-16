// ToDo: may this file be moved to tools folder?

require('./test/mocha.main');

// Note: see https://github.com/FormidableLabs/full-stack-testing/blob/master/test/client/main.js

// Use webpack to include all test code _and_
// all app code _except_ the entry point
// so we can get code coverage in the bundle, whether tested or not.
var appReq = require.context('./src', true, /\.js$/);
appReq.keys().filter(function (key) {
  return key !== './react.main.js';
}).map(appReq);

// Only start mocha in browser.
if (!window.__karma__) {
  window.mocha.run();
}

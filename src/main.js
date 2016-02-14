/* eslint-env amd */

// Note: require.conf.js is already loaded by now
require.config({
  deps: ['app'],

  callback: function (app) {
    app();
  }
});

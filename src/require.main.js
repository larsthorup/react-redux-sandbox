/* eslint-env amd */

// Note: require.conf.js is already loaded by now
require.config({
  deps: ['react.main'],

  callback: function (main) {
    main();
  }
});

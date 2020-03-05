// Note: this file must be in the root: https://github.com/wallabyjs/public/issues/68
module.exports = function () {
  return {
    // debug: true,
    testFramework: 'mocha@2.1.0',
    files: [
      'src/**/*.js',
      'test/**/*.js',
      { pattern: 'src/**/*.test.js', ignore: true }
    ],
    tests: [
      'src/**/*.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    workers: {
      recycle: true
    },
    bootstrap: function (wallaby) {
      require('./test/mocha.main');
    }
  };
};

// ToDo: could this file be moved to tools folder?

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],

    files: [
      'output/test/karma-webpack.js'
    ],

    frameworks: [ 'mocha' ],

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha'
    ],

    reporters: [ 'dots' ]
  });
};

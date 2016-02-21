module.exports = function (config) {
  config.set({
    basePath: '..',

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

module.exports = {
  verbose: false,
  instrumentation: {
    excludes: [
      'src/**/*.test.js'
    ]
  },
  reporting: {
    print: 'none',
    dir: './output/coverage',
    reports: [
      'lcov',
      'json',
      'text-summary'
    ]
  }
};

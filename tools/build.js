var fs = require('fs-extra');

// ToDo: version vendor assets
fs.copySync('node_modules/purecss/build/pure.css', 'output/build/pure.css');
// ToDo: fingerprint the css
fs.copySync('src/app.css', 'output/build/app.css');
fs.copySync('src/data', 'output/build/data');

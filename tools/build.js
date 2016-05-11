var fs = require('fs-extra');
var pureCss = require('purecss/package.json');

fs.copySync('node_modules/purecss/build/pure.css', `output/build/pure-${pureCss.version}.css`);
// ToDo: fingerprint the css
fs.copySync('src/app.css', 'output/build/app.css');
fs.copySync('src/data', 'output/build/data');

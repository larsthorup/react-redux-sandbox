var fs = require('fs-extra');

fs.copySync('node_modules/purecss/build/pure.css', 'output/build/pure.css');
fs.copySync('src/app.css', 'output/build/app.css');
fs.copySync('src/index.html', 'output/build/index.html');

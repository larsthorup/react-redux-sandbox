'use strict';

let chai = require('chai');
global.jsnox = require('jsnox');
global.React = require('react');
global.d = global.jsnox(global.React);

// Chai setup
global.should = chai.should();

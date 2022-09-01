const options = require('../selfpack.config');
const Compiler = require('./compiler');

new Compiler(options).run();
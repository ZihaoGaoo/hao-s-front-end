(function(modules) {
      function require(filename) {
        const fn = modules[filename];
        const module = { exports: {} }
        fn(require, module, module.exports);
        return module.exports
      }
      require('/Users/gaozihao/Project/front-end/hao\'s front end/01-webpack/src/index.js')
    })({ '/Users/gaozihao/Project/front-end/hao\'s front end/01-webpack/src/index.js': function(require, module, exports) { "use strict";

var _utils = require("./utils.js");

document.write((0, _utils.handleWord)([1, 2, 3])); },'./utils.js': function(require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleWord = handleWord;
function handleWord(words) {
  return Array.isArray(words) ? words.join('') : '';
} }, })
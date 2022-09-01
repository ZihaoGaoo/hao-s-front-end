const { getAST, getDependencies, transform } = require('./parse');
const path = require('path');
const fs = require('fs');

module.exports = class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.moduleList = [];
  }

  run() {
    const entryModule = this.buildModule(this.entry, true);
    this.moduleList.push(entryModule);
    this.moduleList.forEach((module) => {
      module.dependencies.forEach((dependency) =>
        this.moduleList.push(this.buildModule(dependency, false))
      );
    });
    this.emitFiles();
  }

  buildModule(filename, isEntry) {
    let ast;
    if (isEntry) {
      ast = getAST(filename);
    } else {
      const absPath = path.join(process.cwd(), '../src', filename);
      ast = getAST(absPath);
    }
    return {
      filename,
      dependencies: getDependencies(ast),
      source: transform(ast),
    };
  }

  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename);
    const modules = this.moduleList.reduce((pre, cur) => {
      pre += `'${cur.filename}': function(require, module, exports) { ${cur.source} },`;
      return pre;
    }, '');
    const bundle = `(function(modules) {
      function require(filename) {
        const fn = modules[filename];
        const module = { exports: {} }
        fn(require, module, module.exports);
        return module.exports
      }
      require('${this.entry}')
    })({ ${modules} })`;
    fs.writeFileSync(outputPath, bundle, 'utf-8');
  }
};

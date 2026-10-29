// Data-only TypeScript loader for Node tests. Asset imports are checked, not rendered.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (!path.extname(file)) file += '.ts';
  if (!fs.existsSync(file)) throw new Error(`Missing resource: ${file}`);
  if (!/\.tsx?$/.test(file)) return file;
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} }; cache.set(file, module);
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const localRequire = ref => ref.startsWith('.') ? load(path.resolve(path.dirname(file), ref)) : require(ref);
  vm.runInNewContext(`(function(require,module,exports){${js}\n})`, { process, console, __DEV__: false }, { filename: file })(localRequire, module, module.exports);
  return module.exports;
}
module.exports = { load };

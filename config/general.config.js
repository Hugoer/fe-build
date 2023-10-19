const path = require('path');
const getArgumentValue = require('../utils/getArgumentValue');
/*

  paths configurations

*/
// Project key for prefix and folders
const projectKey = 'myproj';

// root path of the package
const rootPath = path.resolve('.');

// source files path
const sourcesPath = path.join(rootPath, 'src');

// common folder for alias like import 'commons/utils/myFn';
const common = path.join(sourcesPath, 'common');

// paths that should be excluded from any search (defaults ones)
const ignore = ['!(**/target/**)', '!(**/jcr_root/**)', '!(**/common/**)'];

// where files should be compiled at
const destinationPath = path.join(rootPath, 'dist');

// Node modules for alias lower case for
const nodeModules = path.join(rootPath, 'node_modules');

/*

  files entries configurations

*/
// what is the source files key suffix to compile
const sourceKey = 'source';

// what is the compiled bundle key
const bundleKey = 'bundle';

// source file types ['js', 'scss']
const sourceTypes = ['js', 'scss'];

// project local configurations for sub folders so it compile as a bundle
const extendConfigurations = '.febuild';

// default tasks to run
// optional clientLibs
const defaultTasks = ['styles', 'webpack', 'clientlibs'];

/*

  command line arguments configurations

*/
// By default its production, then use the flag or node env to change it
const isProduction = !(process.env.NODE_ENV === 'development')
      && !getArgumentValue('--development');

// Mode is string format
const mode = isProduction ? 'production' : 'development';

// check watchers flag
const watch = getArgumentValue('--watch');

// bundle analyze flag
const analyze = getArgumentValue('--analyze');

// task to execute via command line
const task = getArgumentValue('--task=');

// select config path params command line
const configFile = getArgumentValue('--config-file=');

// quiet
const quiet = getArgumentValue('--quiet');

// analyzerPort
const analyzerPort = getArgumentValue('--port=') || 8888;

// disable Stylelint
const disableStyleLint = getArgumentValue('--disable-styelint');

// general webpack
const devtool = isProduction ? false : 'inline-source-map';

// general optimization
const excludedFromVendors = ['babel', 'core-js'];

// modules to run on webpack rules (each config module.config.js)
const modules = ['babel'];

// split all entries
const multiple = true;

// export as a hole object
module.exports = {
  projectKey,
  sourceKey,
  bundleKey,
  sourceTypes,
  rootPath,
  sourcesPath,
  common,
  ignore,
  destinationPath,
  isProduction,
  mode,
  watch,
  analyze,
  analyzerPort,
  disableStyleLint,
  task,
  quiet,
  configFile,
  extendConfigurations,
  modules,
  multiple,
  nodeModules,
  defaultTasks,
  devtool,
  excludedFromVendors
};

'use strict';

var Module = require('module');
var originalRequire = Module.prototype.require;
var fs = require('fs');
var pug = require('pug');

Module.prototype.require = function(filePath) {
  if (filePath.indexOf('.jade') > -1) {
    var rawJade = fs.readFileSync(Module._resolveFilename(filePath, this));
    return pug.compile(rawJade);
  }
  return originalRequire.apply(this, arguments);
};

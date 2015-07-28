'use strict';

var path = require('path');
var fs = require('fs');
var docopt = require('docopt').docopt;

module.exports = function docoptmd(dir, opts) {
  dir = path.resolve(dir);
  opts = opts || {};
  opts.readme = opts.readme || 'README.md';
  opts.version = opts.version ||
    require(path.join(dir, 'package.json')).version;
  var readme = fs.readFileSync(path.join(dir, opts.readme)).toString();
  var matches = readme.match(
      /```docopt[\s\t]*[\r\n]((?:(?![\r\n]```)(?:[\r\n]|.))*)[\r\n]```/);
  if (!matches) {
    throw new Error('readme doesn\'t contain a ```docopt ...``` block');
  }

  delete opts.readme;
  return docopt(matches[1], opts);
};

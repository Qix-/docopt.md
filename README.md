# docopt.coffee.md [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/docopt.coffee.md.svg?style=flat-square)](https://travis-ci.org/Qix-/docopt.coffee.md) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/docopt.coffee.md.svg?style=flat-square)](https://coveralls.io/r/Qix-/docopt.coffee.md)
Read your [docopt](https://github.com/docopt/docopt.coffee) configuration
directly from your README.md file and package.json.

Readme files must contain a code **block** with the language type
`docopt`. All text within the block is passed as the docopt configuration.

See `fixture/` for an example.

## Example
```javascript
var docoptmd = require('docoptmd');

var options = docoptmd(__dirname, {argv: process.argv});
```

## Options
All existing docopt options are passed right through. In addition to these,
docoptmd introduces the `readme` option, which specifies the *basename* of the
readme file (default `README.md`).

## License
Licensed under the MIT license

'use strict';
// jshint mocha:true

require('should');

var docoptmd = require('./');

beforeEach(function() {
  process.argv = ['node', 'docoptmd'];
});

it('should successfully read from fixture project', function() {
  var options = docoptmd('fixture');
  options.should.be.ok();
  options['--foo'].should.not.be.ok();
  parseInt(options['--bar']).should.equal(1337);
});

it('should successfully read from fixture project with args (foo)', function() {
  process.argv.push('--foo');
  var options = docoptmd('fixture');
  options.should.be.ok();
  options['--foo'].should.be.ok();
  parseInt(options['--bar']).should.equal(1337);
});

it('should successfully read from fixture project with args (bar)', function() {
  process.argv.push('--bar=1234');
  var options = docoptmd('fixture');
  options.should.be.ok();
  options['--foo'].should.not.be.ok();
  parseInt(options['--bar']).should.equal(1234);
});

it('should auto-populate version information', function() {
  process.argv.push('--version');
  var ex = process.exit;
  var log = console.log;
  process.exit = function() {};
  var result = '';
  console.log = function(msg) { result = msg; };
  try {
    docoptmd('fixture');
  } finally {
    process.exit = ex;
    console.log = log;
  }
  result.should.be.a.String().and.equal('100.1.1');
});

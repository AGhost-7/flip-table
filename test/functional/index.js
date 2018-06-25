var assert = require('assert')
var exec = require('child_process').exec
var expect = require('chai').expect

describe('FLIPN OUT CLI WOW', function() {
  it('should flip when sent as args', function(done) {
    exec('bin/flip-table -o HI', function(err, stdout, stderr) {
      assert(!err)
      expect(stdout).to.contain('(╯°□°）╯︵')
      done()
    })
  })

  it('should flip when piped', function(done) {
    exec('echo FLIPPIN TABLES BRO | bin/flip-table -o', function(
      err,
      stdout,
      stderr
    ) {
      assert(!err)
      expect(stdout).to.contain('𐐒')
      done()
    })
  })

  it('should unflip characters', function(done) {
    exec('bin/flip-table -o derp | bin/flip-table -ou', function(err, stdout) {
      assert(!err)
      expect(stdout).to.contain('derp')
      done()
    })
  })

  it('should unflip even if flipper not present', function(done) {
    exec(
      "bin/flip-table -o okthkxbye | cut -d ' ' -f 2 | bin/flip-table -ou",
      function(err, stdout) {
        assert(!err)
        expect(stdout).to.be.equal('okthkxbye ノ( º _ ºノ)\n')
        done()
      }
    )
  })

  // TODO: clipboard tests?? But liek, how?
})

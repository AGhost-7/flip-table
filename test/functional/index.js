var exec = require('child_process').exec;
var expect = require('chai').expect;

describe('FLIPN OUT CLI WOW', function() {
	it('should flip when sent as args', function(done) {
		exec('bin/flip-table -o HI', function(err, stdout, stderr) {
			expect(stdout).to.contain('(╯°□°）╯︵');
			done();
		});
	});

	it('should flip when piped', function(done) {
		exect('echo FLIPPIN TABLES BRO | bin/flip-table -o', function(err, stdout, stderr) {
			expect(stdout).to.contain('𐐒');
			done();
		});
	});

	// TODO: clipboard tests?? But liek, how?
});

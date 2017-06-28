
var child_process = require('child_process');
var toClipboard = require('to-clipboard');

module.exports = function(str) {
	if(process.platform === 'linux') {
		var childProcess = child_process.spawn('xclip', ['-selection', 'clipboard'], {
			stdio: ['pipe', 'gnore', 'ignore']
		});
		childProcess.stdin.write(str);
		childProcess.stdin.end();
	} else {
		return toClipboard(str);
	}
};

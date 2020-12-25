var cp = require('child_process')
var toClipboard = require('to-clipboard')

module.exports = function (str) {
  if (process.platform === 'linux') {
    var childProcess = cp.spawn('xclip', ['-selection', 'clipboard'], {
      stdio: ['pipe', 'ignore', 'ignore'],
    })
    childProcess.stdin.write(str)
    childProcess.stdin.end()
  } else {
    return toClipboard(str)
  }
}

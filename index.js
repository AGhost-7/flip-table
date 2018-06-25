var flipText = require('flip-text')

var emoji = '(╯°□°）╯︵'

module.exports = function(input) {
  return emoji + ' ' + flipText(input)
}

var unEmoji = 'ノ( º _ ºノ)'

module.exports.undo = function(input) {
  if (input.indexOf(emoji) === 0) {
    input = input.substring(emoji.length + 1)
  }
  return flipText(input) + ' ' + unEmoji
}

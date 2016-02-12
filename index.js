
var flipText = require('flip-text');

var emoji = '(╯°□°）╯︵';

module.exports = function(input) {
	return emoji + ' ' + flipText(input);
};

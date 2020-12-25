var chai = require('chai')
var expect = chai.expect

var flipTable = require('../../index')

describe('flip-table function', function () {
  it('should Flip meh', function () {
    var flippled = flipTable('Flip meh')
    expect(flippled).to.contain('(╯°□°）╯︵')
  })
  it('should flip flipped characters', function () {
    var flippled = flipTable('Ⅎ')
    expect(flippled).to.contain('F')
  })
})

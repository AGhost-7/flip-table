const flipTable = require('../..')
const SqlClient = require('../../lib/sql-client')
const connectionString =
  process.env.FLIPTABLE_CONNECTION || 'postgres://localhost'

describe('integration', function() {
  describe('sql client', function() {
    const client = new SqlClient(connectionString)
    it('rename', async function() {
      await client.connect()
      await client.knex.schema.dropTableIfExists('foobar')
      await client.knex.schema.dropTableIfExists(flipTable('foobar'))
      await client.knex.schema.createTable('foobar', function(table) {
        table.string('yes')
      })
      await client.rename('foobar', flipTable('foobar'))
    })
  })
})

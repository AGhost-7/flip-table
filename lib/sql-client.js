const knexlib = require('knex')
const path = require('path')

module.exports = class SqlClient {
  constructor(connectionString) {
    this._connectionString = connectionString
  }

  async connect() {
    let connection
    const parsed = new URL(this._connectionString)
    const database = parsed.path && path.parse(parsed.pathname).name
    switch (parsed.protocol) {
      case 'postgres:':
        this.client = 'pg'
        connection = {
          host: parsed.hostname || 'localhost',
          port: parsed.port || 5432,
          database: database || 'template1',
          user: parsed.username || 'postgres',
          password: parsed.password || undefined,
        }
        break
      case 'mysql:':
        this.client = 'mysql'
        connection = {
          host: parsed.hostname || 'localhost',
          port: parsed.port || 3306,
          database: database,
        }
        break
      default:
        return Promise.reject(new Error('Invalid parameter ' + parsed.protocol))
    }
    this.knex = knexlib({
      client: this.client,
      connection,
    })
    return this.knex.raw('select 1')
  }

  rename(table, newName) {
    return this.knex.schema.renameTable(table, newName)
  }
}

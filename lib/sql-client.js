const knexlib = require('knex')
const path = require('path')
const url = require('url')

module.exports = class SqlClient {
  constructor(connectionString) {
    this._connectionString = connectionString
  }

  async connect() {
    let connection
    const parsed = url.parse(this._connectionString)
    const database = parsed.path && path.parse(parsed.path).name
    const { user, password } = parseAuth(parsed.auth)
    switch (parsed.protocol) {
      case 'postgres:':
        this.client = 'pg'
        connection = {
          host: parsed.hostname || 'localhost',
          port: parsed.port || 5432,
          database: database || 'template1',
          user: user || 'postgres',
          password: password || undefined
        }
        break
      case 'mysql:':
        this.client = 'mysql'
        connection = {
          host: parsed.hostname || 'localhost',
          port: parsed.port || 3306,
          database: database
        }
        break
      default:
        const message = 'Invalid parameter ' + parsed.protocol
        return Promise.reject(new Error(message))
    }
    this.knex = knexlib({
      client: this.client,
      connection
    })
    return this.knex.raw('select 1')
  }

  rename(table, newName) {
    return this.knex.schema.renameTable(table, newName)
  }
}

function parseAuth(auth) {
  let user = auth
  let password = null
  if (auth) {
    const parts = auth.split(':')
    if (parts.length > 1) {
      user = parts[0]
      password = parts[1]
    }
  }

  return { user, password }
}

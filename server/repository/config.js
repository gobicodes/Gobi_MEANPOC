const mysql = require('mysql')
const nconf = require('nconf');
nconf.argv().env().file({ file: './server/config.dev.json' });

var database = nconf.get('database');

const config = {
  host: database.host,
  user: database.user,
  password: database.password,
  database: database.database
}



module.exports = {
  connectionPool : mysql.createConnection(config)
}

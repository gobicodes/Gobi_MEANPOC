const { connectionPool } = require('./config');
const TIMEOUT_MAX = 90000


function connectToServer(connection) {
  connection.connect(() => console.log('connection established'))
  return connection
}

function releaseConnection(connection) {
  connection.release
    ? connection.release(() => console.log('connection released'))
    : connection.end(() => console.log('connection ended'))
  return connection
}

function executeQueryAndDisconnect(query, connection = connectionPool) {
  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) throw error
      // console.log(results[0])
      resolve(results)
      connection.emit('release', connection)
      // console.log(connection._freeConnections.indexOf(connection))
    })
  })
}

const makeQuery = (sql = '', values = [], timeout = TIMEOUT_MAX) => ({
  sql,
  values,
  timeout
})

module.exports = {
  connectToServer, releaseConnection, executeQueryAndDisconnect, makeQuery
}


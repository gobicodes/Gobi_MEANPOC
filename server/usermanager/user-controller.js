const SqlString = require('sqlstring');
const { connectionPool } = require('../repository/config');
const { connectToServer, releaseConnection, executeQueryAndDisconnect } = require('../repository/index');
const {getalluserquery, getuserquery,updateuserquery,
   createuserquery, deleteuserquery, getUserByUserNameQuery} = require('../repository/queries');

const fwd = val => {
  return val
};
class usercontroller {
  constructor() { }

  createuser(req){  
    var connection = connectToServer(connectionPool);
   
  return executeQueryAndDisconnect(SqlString.format(createuserquery, req.body)
    ,connection
  ).then(fwd)
  }

  deleteuser(req){  
    var connection = connectToServer(connectionPool);
   
  return executeQueryAndDisconnect(deleteuserquery + req.params.user_id 
    ,connection
  ).then(fwd)
  }

  getuser(req){  
    var connection = connectToServer(connectionPool);
   
  return executeQueryAndDisconnect(getuserquery  + req.params.user_id 
    ,connection
  ).then(fwd)
  }

  updateuser(req){  
    var connection = connectToServer(connectionPool);   
  return executeQueryAndDisconnect(SqlString.format(updateuserquery, [req.body, req.body.user_id])
    ,connection
  ).then(fwd)
  }


  getallusers(req){  
    var connection = connectToServer(connectionPool);
   
    return executeQueryAndDisconnect(getalluserquery, connection)
    .then(fwd)
  }

  getUserByUserName(req) {
    var connection = connectToServer(connectionPool);
    return executeQueryAndDisconnect(SqlString.format(getUserByUserNameQuery, req.body.username), connection)
      .then(fwd);
  }
}

exports.default = usercontroller
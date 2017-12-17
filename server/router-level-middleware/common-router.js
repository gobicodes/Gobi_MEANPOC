const express = require('express');
var globalrouter = express.Router(); 
const R = require('ramda');
// a middleware function with no mount path. This code is executed for every request to the router
globalrouter.use(function (req, res, next) {
  // console.log('Entering router middleware');
  if(req && (req.url=='/api/authenticate'|| !R.contains("api",req.url)))
  {
    next();
    console.log('Exiting router middleware since its authenticate');
    return;
  }
  console.log('Validating token'); 
  if(!req.headers   && !req.headers['x-access-token'])
  { return res.status(403).send({ 
    success: false, 
      message: 'Need valid token in headers to authenticate' 
  });

  }

  // console.log(req.headers);
   // check header or url parameters or post parameters for token
   var token =req.headers['x-access-token']
  //  console.log( req.app.get('superSecret'));
   // decode token
   if (token) {
           
               // verifies secret and checks exp
               jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {      
               if (err) {
                console.log('token authentication failed');
                   console.log(err);
                   return res.send({ success: false, message: 'Failed to authenticate token.' });    
               }else {
                   // if everything is good, save to request for use in other routes
                   req.decoded = decoded;    
                   console.log('token authenticated successfully');
                   next();
               }
               });
           
           } else {
           
           return res.status(403).send({ 
               success: false, 
               message: 'No token provided.' 
           });
       
         }
})


module.exports = globalrouter;
const express = require('express');
const router = express.Router();
const usercontroller = require('./user-controller');
var jwt    = require('jsonwebtoken');
// declare axios for making http requests
const axios = require('axios');

// Authenticate user from DB
router.post('/authenticate', (req, res) => {
    
    // console.log('Entering authenticate'); 
    // if (req.body.username && req.body.password) {
    //     const controller = new usercontroller.default();
    //     var user;
    //     controller.getUserByUserName(req).then(
    //         function(data) {
    //             // Check if a single user is returned
    //             if (data.length == 1) {
    //                 const user = data[0];
    //                 // Check if password matches
    //                 if (user.password == req.body.password) {
                        var jwttoken = jwt.sign(req.body, req.app.get('superSecret'), {
                            expiresIn:1200// expires in 24 hours
                        });
    //                     res.send({
    //                         id: user.user_id,
    //                         username: user.user_name,
    //                         token: jwttoken,
    //                         role:user.role_name
    //                     });        
    //                 } else { res.send(new Error('Username or password is incorrect')) }
    //             } else { res.send(new Error('Username or password is incorrect')) }
    //         }
    //     );
    // }
    // else
    // { res.send(new Error('Username or password is incorrect'));}

                        res.send({
                            id:'001',
                            username: 'dummyuser',
                            token: jwttoken,
                            role:'dummyrole'
                        });
});

router.post('/users/add', (req,res) => {
    console.log("Add user request started..");
    const controller = new usercontroller.default();
    controller.createuser(req).then(val=> res.send(val))
});

router.delete('/users/delete/:user_id', (req,res) => {
    console.log("Delete user request started..");
    const controller = new usercontroller.default();
    controller.deleteuser(req).then(val=> res.send(val))
});

router.post('/users/:user_id', (req,res) => {
    console.log("Get user by id request started..");
    const controller = new usercontroller.default();
    controller.getuser(req).then(val=> res.send(val))
});

router.post('/users/edit/:user_id', (req,res) => {
    console.log("Get user by id request started..");
    const controller = new usercontroller.default();   
    controller.updateuser(req).then(val=> res.send(val))
});

router.get('/users/', (req,res) => {
    console.log("Get user by id request started..");
    const controller = new usercontroller.default();
    controller.getallusers(req).then(val=> res.send(val))
});

module.exports = router;
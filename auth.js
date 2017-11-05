const db = require('./database');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken')
const config = require('./database/config');
var express = require('express');
var router = express.Router();

const salt = bcrypt.genSaltSync(10);
const Table = 'student';

function authUser(req, res, next) {
    //TODO change query to email
    var email = req.body.email;  
    db.any('select * from '+Table+ ' where email = $1', email)
      .then(function (data) {
          //failed
          if(!data){
            res.status(400)
            .json({
            status: 'failed',
            message: 'failed authentication attempt'
            });
          }
          else{
              //failed
              if (!bcrypt.compareSync(req.body.password, data[0].password)){
                res.status(400)
                .json({
                status: 'failed',
                message: 'failed authentication attempt'
                }); 
              }
              //success auth
              else{
                const payload = {
                    user: {name: data.name, id: data.id}
                };
                var token = jwt.sign(payload, config.secret, {
                    //expiresInMinutes: 1440 // expires in 24 hours
                  });
                //success
                res.status(200)
                .json({
                status: 'success',
                data: data,
                message: 'Authenticate user',
                token: token
                });          
              }
          }        
          
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  

router.use(function authMiddleware(req, res, next) {
  //check header for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.'});
      }
      else{
        req.decoded = decoded;
        next();
      }
    });
  }
  else{
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});


  module.exports = {
    authUser:authUser,
    authMiddleware:router

}
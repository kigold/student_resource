var express = require('express');
var router = express.Router();
const auth = require('../auth');

/* GET home page. */
router.get('/page', function(req, res, next) {
  res.render('page', { title: 'AuthIsh' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'AuthIsh' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'AuthIsh' });
});

router.post('/login', auth.authUser);




module.exports = router;

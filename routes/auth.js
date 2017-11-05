var express = require('express');
var router = express.Router();
const auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AuthIsh' });
});

router.post('/login', auth.authUser);




module.exports = router;

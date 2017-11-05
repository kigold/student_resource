var express = require('express');
var router = express.Router();
const db = require('../database/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', db.getAllStudents);
router.get('/student/:id', db.getSingleStudent);
router.post('/createStudent', db.createStudent);
router.post('/updateStudent/:id', db.updateStudent);
router.delete('/student/:id', db.removeStudent);


router.get('/resource', db.getAllResource);
router.get('/resource/:id', db.getSingleResource);
router.post('/createResource', db.createResource);
router.post('/updateResource/:id', db.updateResource);
router.delete('/resource/:id', db.removeResource);



module.exports = router;

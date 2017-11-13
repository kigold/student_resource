var express = require('express');
var router = express.Router();
const db = require('../database/queries');
const database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', db.getAllStudents);
router.get('/student/:id', db.getSingleStudent);
router.post('/createStudent', db.createStudent);
router.post('/updateStudent/:id', db.updateStudent);
router.delete('/student/:email', db.removeStudent);


router.get('/resource', db.getAllResource);
router.get('/resource/:id', db.getSingleResource);
router.get('/create_resource', db.createResourceForm);
router.post('/createResource', db.createResource);
router.post('/updateResource/:id', db.updateResource);
router.delete('/resource/:id', db.removeResource);

//create Database
//router.get('/createStudentDB', db.createStudentDB);
//router.get('/createResourceDB', db.createResourceDB);

/* GET users listing. */
router.get('/createStudentDB', function(req, res, next) {
  console.log(database);
  database.query("CREATE TABLE student(ID SERIAL PRIMARY KEY,email VARCHAR UNIQUE,password VARCHAR,name VARCHAR,gender VARCHAR,occupation VARCHAR,status VARCHAR,dob DATE)");
  res.send('Created Student DB');
});

router.get('/createResourceDB', function(req, res, next) {
  database.query("CREATE TABLE resource(ID SERIAL PRIMARY KEY,title VARCHAR,content VARCHAR,author INTEGER,created DATE)");
  res.send('Created Resource DB');
});


module.exports = router;

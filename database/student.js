const db = require('../database');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const Table = 'student';

function APIgetAllStudents(req, res, next) {
    db.any('select * from '+Table)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL students'
          });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function getAllStudents(req, res, next) {
    db.any('select * from '+Table)
      .then(function (data) {
        res.render('students', { title: 'Student', students: data });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function APIgetSingleStudent(req, res, next) {
    var id = parseInt(req.params.id)
    db.any('select * from '+Table+ ' where id = $1', id)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved single students'
          });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function getSingleStudent(req, res, next) {
    var id = parseInt(req.params.id)
    db.any('select * from '+Table+ ' where id = $1', id)
      .then(function (data) {
        res.render('student', { title: 'Student', student: data[0] });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function createStudent(req, res, next) {
  req.body.status = "active";
  req.body.password = bcrypt.hashSync(req.body.password, salt)
  db.none('insert into '+Table+'(email, name, gender, dob, occupation, password, status)' +
      'values(${email}, ${name}, ${gender}, ${dob}, ${occupation}, ${password}, ${status})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one Student'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateStudent(req, res, next) {
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    req.body.status = "active";
    var parameters = [req.body.email, req.body.name, req.body.gender, req.body.dob,
        req.body.occupation, req.body.password, req.body.status,  parseInt(req.params.id)]
    db.none('update '+Table+' set email=$1, name=$2, gender=$3, dob=$4, occupation=$5, password=$6, status=$7 where id=$8',
      parameters)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated Stdent'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function removeStudent(req, res, next) {
    //var id = parseInt(req.params.id);
    var email = req.params.email;
    db.result('delete from '+Table+' where email = $1', email)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} student`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
  }
  
  


  module.exports = {
      getAllStudents:getAllStudents,
      getSingleStudent:getSingleStudent,
      createStudent:createStudent,
      updateStudent:updateStudent,
      removeStudent:removeStudent

  }
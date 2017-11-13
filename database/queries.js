const database = require('../database');
const student = require('./student');
const resource = require('./resource');

function createStudentDB(res, req, next) {
  res.send('Creating Student Database');
  //return "Creating Student Database";
}
function createResourceDB(res, req, next) {
  res.send('Creating Resource Database');
  //return "Creating Resource Database";
}

module.exports = {
  getAllStudents: student.getAllStudents,
  getSingleStudent: student.getSingleStudent,
  createStudent: student.createStudent,
  updateStudent: student.updateStudent,
  removeStudent: student.removeStudent,

  getAllResource: resource.getAllResource,
  getSingleResource: resource.getSingleResource,
  createResourceForm: resource.createResourceForm,
  createResource: resource.createResource,
  updateResource: resource.updateResource,
  removeResource: resource.removeResource,

  createStudentDB:createStudentDB,
  createResourceDB:createResourceDB
};

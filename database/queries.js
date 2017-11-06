const database = require('../database');
const student = require('./student');
const resource = require('./resource');

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
  removeResource: resource.removeResource
};

const db = require('../database');

const Table = 'resource';
function getAllResource(req, res, next) {
    db.any('select * from '+Table)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL resources'
          });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function getSingleResource(req, res, next) {
    var id = parseInt(req.params.id)
    db.any('select * from '+Table+ ' where id = $1', id)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved single resource'
          });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  
    }

    function createResource(req, res, next) {
        req.body.author = parseInt(req.body.author);
        db.none('insert into '+Table+'(title, content, created, author)' +
            'values(${title}, ${content}, ${created}, ${author})',
          req.body)
          .then(function () {
            res.status(200)
              .json({
                status: 'success',
                message: 'Inserted one resource'
              });
          })
          .catch(function (err) {
            return next(err);
          });
      }

      function updateResource(req, res, next) {
        var parameters = [req.body.title, req.body.content, req.body.created,
            parseInt(req.body.author),  parseInt(req.params.id)]
        db.none('update '+Table+' set title=$1, content=$2, created=$3, author=$4 where id=$5',
          parameters)
          .then(function () {
            res.status(200)
              .json({
                status: 'success',
                message: 'Updated Resource'
              });
          })
          .catch(function (err) {
            return next(err);
          });
      }

      function removeResource(req, res, next) {
        var id = parseInt(req.params.id);
        db.result('delete from '+Table+' where id = $1', id)
          .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
              .json({
                status: 'success',
                message: `Removed ${result.rowCount} resource`
              });
            /* jshint ignore:end */
          })
          .catch(function (err) {
            return next(err);
          });
      }

  module.exports = {
      getAllResource:getAllResource,
      getSingleResource:getSingleResource,
      createResource:createResource,
      updateResource:updateResource,
      removeResource:removeResource
  }
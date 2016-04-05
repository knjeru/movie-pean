var express = require('express');
var router = express.Router();
var query = require('../queries.js');

router.get('/', function(req,res,next) {
    query.getMovies()
    .then(function(data) {
        res.json(data);
    });
});

router.get('/:id', function(req,res,next) {
    query.getMovie(req.params.id)
    .then(function(data){
        res.json(data);
    });
});

router.post('/new', function(req,res,next) {
    query.addMovie(req.body)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
        res.status(500);
    });
});

router.put('/:id/edit', function(req,res,next) {
    query.updateMovie(req.params.id, req.body)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
        res.status(500);
    });
});

router.delete('/:id/delete', function(req,res,next) {
    query.deleteMovie(req.params.id)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
        res.status(500);
    });
});

module.exports = router;

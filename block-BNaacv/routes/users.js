var express = require('express');
var router = express.Router();
var user = require('../model/user');


router.get('/new', (req, res) => {
    res.render('../views/userForm');
});

router.post('/new', (req, res) => {
    user.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});



router.get('/:id', (req, res) => {
    var id = req.params.id;
    user.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('../views/singleUser', {user: user});
    });
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    user.findById(id, (err, user) => {
        if(err) return next(err);
        res.json(`${user} deleted`);
    });
});

router.put('/:id', (req, res) => {
    var id = req.params.id;
    user.findById(id, {new: true}, (err, user) => {
        if(err) return next(err);
        res.json(`${user} updated`);
    });
});


router.get('/', (req, res) => {
    user.find({}, (err, user) => {
        if(err) return next(err);
        res.render('../views/users', {user: user});
    });
});






module.exports = router;
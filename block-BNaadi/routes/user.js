var express = require('express');
const User = require('../model/user');
var router = express.Router();


router.post('/', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if(err) return next(err);
        res.redirect('/users');
    });
});

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('listUsers', {users: users});
    });
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser', { user });
    });
});

router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect(`/users/${id}`);
    });
});

router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if(err) return next(err);
        res.send('user deleted')
    });
});

module.exports = router;
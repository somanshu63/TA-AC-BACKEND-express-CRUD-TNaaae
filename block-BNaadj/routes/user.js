var express = require('express');
var router = express.Router();
var user = require('../model/user')

router.get('/new', (req, res) => {
    res.render("form")
});

router.post('/', (req, res) => {
    user.create(req.body, (err, captureduser) => {
        if(err) res.redirect('/users/new');
        res.redirect(`/users/${captureduser._id}`);
    });
});

router.get('/', (req, res) => {
    user.find({}, (err, allUsers) => {
        if(err) return next(err);
        res.render('users', {users: allUsers});
    });
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    user.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleuser', {user: user});
    });
});

router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    user.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('editForm', {user: user});
    });
});

router.post('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    user.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect(`/users/${updatedUser._id}`);
    });
});

router.get('/:id/delete', (req, res, next) => {
    var id = req.params.id;
    user.findByIdAndDelete(id, (err, user) => {
        if(err) return next(err);
        res.redirect('/users');
    });
});

module.exports = router;
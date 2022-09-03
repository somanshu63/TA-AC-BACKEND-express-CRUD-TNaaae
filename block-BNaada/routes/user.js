var express = require('express');
var router = express.Router();
var user = require('../model/user')

router.get('/new', (req, res) => {
    res.render("form")
});

router.post('/', (req, res) => {
    console.log(req.body);
    user.create(req.body, (err, captureduser) => {
        if(err) res.redirect('/users/new');
        res.redirect('/users');
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

module.exports = router;
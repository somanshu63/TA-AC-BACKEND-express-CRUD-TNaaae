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
        res.redirect('/');
    });
});


module.exports = router;
var express = require('express');
var path = require('path');
var router = express.Router();
var student = require('../models/student');



router.get('/new', (req, res) => {
    var pathOf = __dirname;
    res.sendFile(pathOf.substring(0, pathOf.length - 6) + "/form.html");
});


router.post('/', (req, res) => {
    student.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);

    });
});

router.get('/', (req, res) => {
    student.find({}, (err, student) => {
        if (err) return next(err);
        res.render("../views/list", {list: student});
    });
    //res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    student.findById(id, (err, student) => {
        if (err) return next(err);
        res.render("../views/single", {student: student});
    });
    //res.render("studentDetail", {
    //student: { name: "rahul", email: "rahul@altcampus.io" },
    //});
});







module.exports = router;
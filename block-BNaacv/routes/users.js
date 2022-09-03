var express = require('express');
var router = express.Router();


router.get('/new', (req, res) => {
    console.log('hi')
    res.render('../views/userForm');
});


router.get('/', (req, res) => {
    user.find({}, (err, user) => {
        if(err) return next(err);
        res.render('../views/users', {list: user});
    });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    user.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('../views/singleUsers', {user: user});
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






module.exports = router;
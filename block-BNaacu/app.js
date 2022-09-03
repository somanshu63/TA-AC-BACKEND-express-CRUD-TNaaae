//requires
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var logger = require('morgan');
var student = require('./models/student');

//connect to database
mongoose.connect('mongodb://localhost/sample',
    {useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : 'connected to database');
    });

//initiated
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'));

//setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.use('/students', require('./routes/students'));


//error middleware
app.use((req, res, next) => {
    res.send('page not found');
    next();
});
app.use((err, req, res, next) => {
    res.send(err);
});

//listener
app.listen(5000, () => {
    console.log(`server started at port 5k`);
});
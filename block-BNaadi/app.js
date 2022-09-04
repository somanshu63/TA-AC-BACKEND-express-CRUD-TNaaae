//requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');
var user = require('./model/user');
var userRouter = require('./routes/user');

//connect to database
mongoose.connect('mongodb://localhost/user-dairy-2', {
    useUnifiedTopology: true},
    (err) => {
        console.log(err ? err: "connected to database");
    })

//instantiation
var app = express();

//ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//routes
app.use('/users', userRouter);

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
    console.log('server started at port 5k');
});
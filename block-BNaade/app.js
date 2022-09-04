//requires
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var user = require('./model/user');


//connect to database
mongoose.connect('mongodb://localhost/user', 
    {useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : 'connected');
    });


//instantiated
var app = express();

//setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

//routes
app.use("/", indexRouter);
app.use('/users', userRouter);

//error middlewares
app.use((req, res, next) => {
    res.send('page not found');
    next();
});
app.use((err, req, res, next) => {
    res.send(err);
});

//listener
app.listen(5000, () => {
    console.log('server listed at port 5k');
});
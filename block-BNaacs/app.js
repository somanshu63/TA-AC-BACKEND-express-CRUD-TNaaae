//requires
var express = require('express');
var path = require('path');


//initiated
var app = express();

//middleware
app.use(express.json());

//setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.get('/', (req, res) => {
    res.send('welcome');
});

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
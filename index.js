
//     var express=require('express');
// var app = express();
// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host: "ec2-54-183-214-24.us-west-1.compute.amazonaws.com",
//     user: "root",
//     password: "password"
// });

// con.connect(function(err) {
//     if (err) throw err;
//         console.log("connected");
//     });




var express    = require("express");
var login = require('./loginroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login);
router.get('/students',login.students);
router.post('/companysignup',login.companysignup);
router.post('/compsignin',login.compsignin);
router.post('/compjobpost',login.compjobpost);
router.post('/compeventpost',login.compeventpost);
router.get('/compjobs',login.compjobs);
router.get('/compevents',login.compevents);
router.post('/updatedetails',login.updatedetails);
//app.get('/students',login.students);
app.use('/', router);
app.listen(5000);























// const con = mysql.createConnection({
//     host: "database-1.cdd8nvrhc5zx.us-west-1.rds.amazonaws.com",
//     user: "admin",
//     password: "bluehill123"
// });

// con.connect(function(err) {
//     if (err) throw err;

//     con.query('CREATE DATABASE IF NOT EXISTS login;');
//     con.query('USE login;');
//     con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
//         console.log(result);
//     });


   
// });

// app.post('/users', (req, res) => {
//     if (req.query.username && req.query.email && req.query.age) {
//         console.log('Request received');
//         con.connect(function(err) {
//             con.query(`INSERT INTO main.users (username, email, age) VALUES ('${req.query.username}', '${req.query.email}', '${req.query.age}')`, function(err, result, fields) {
//                 if (err) res.send(err);
//                 if (result) res.send({username: req.query.username, email: req.query.email, age: req.query.age});
//                 if (fields) console.log(fields);
//             });
//         });
//     } else {
//         console.log('Missing a parameter');
//     }
// });

// app.get('/users', (req, res) => {
//     con.connect(function(err) {
//         con.query(`SELECT * FROM main.users`, function(err, result, fields) {
//             if (err) res.send(err);
//             if (result) res.send(result);
           
//         });
//     });
// });

// var server = app.listen(3001, function () {
//     console.log("Server listening on port 3000");
// });

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "ec2-54-183-214-24.us-west-1.compute.amazonaws.com",
//   user: "root",
//   password: "password"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// var server = app.listen(3001, function () {
//         console.log("Server listening on port 3001");
//     });
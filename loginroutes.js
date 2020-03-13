//const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "database-1.cdd8nvrhc5zx.us-west-1.rds.amazonaws.com",
//     user: "admin",
//     password: "bluehill123"
// });

// con.connect(function(err) {
//     if (err) throw err;

//     con.query('CREATE DATABASE IF NOT EXISTS main;');
//     con.query('USE main;');
//     con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
//         console.log(result);
//     });
//     con.query('INSERT into users (username,email,age) values("sriya","xyz@gmail.com",27)')
//     con.end();
// });
var express=require('express');
var app = express();
const mysql = require('mysql');
const con = mysql.createConnection({
    // host: "localhost",
    host:"database-1.cdd8nvrhc5zx.us-west-1.rds.amazonaws.com",
    user: "root",
    password: "password"
    // database: "mylab"
});

con.connect(function(err) {
    if (err) throw err;
        console.log("connected");
        con.query('CREATE DATABASE IF NOT EXISTS main;');
        con.query('USE main;');
        con.query('CREATE TABLE IF NOT EXISTS `companies` (`company_id` int(11) NOT NULL AUTO_INCREMENT,`company_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,`company_location` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`created` datetime NOT NULL,`modified` datetime NOT NULL,PRIMARY KEY (`company_id`)) ;',function(error, result, fields) {console.log(result);});
        con.query('CREATE TABLE IF NOT EXISTS `events`(eid int(11) NOT NULL AUTO_INCREMENT,company_id INT,eventname VARCHAR(255) ,description VARCHAR(255),time VARCHAR(255),date VARCHAR(255),location VARCHAR(255),eligibility VARCHAR(255),major VARCHAR(255),PRIMARY KEY (`eid`),FOREIGN KEY (company_id) REFERENCES companies(company_id));',function(error, result, fields) {console.log(result);});
        con.query('CREATE TABLE IF NOT EXISTS `compjobs`(`jid` int(11) NOT NULL AUTO_INCREMENT,company_id INT,jobtitle VARCHAR(255) ,postingdate VARCHAR(255),deadline VARCHAR(255),location VARCHAR(255),salary INT,jobdes VARCHAR(255),jobcat VARCHAR(255),PRIMARY KEY (`jid`),FOREIGN KEY (company_id) REFERENCES companies(company_id));',function(error, result, fields) {console.log(result);});
        con.query('CREATE TABLE IF NOT EXISTS `users` (`id` int(11) NOT NULL AUTO_INCREMENT,`first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`univ_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,`password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,`created` datetime NOT NULL,`modified` datetime NOT NULL,PRIMARY KEY (`id`)) ;',function(error, result, fields) {console.log(result);});
        con.query('CREATE TABLE IF NOT EXISTS `studentdetails`(`sid` int(11) NOT NULL AUTO_INCREMENT,id INT,dob VARCHAR(255) ,city VARCHAR(255),education VARCHAR(255),experience VARCHAR(255),skillset  VARCHAR(255),careerobj  VARCHAR(255),PRIMARY KEY (`sid`),FOREIGN KEY (id) REFERENCES users(id));',function(error, result, fields) {console.log(result);});     
      });
    exports.register = function(req,res){
        // console.log("req",req.body);
        var today = new Date();
        var users={
          "first_name":req.body.firstname,
          "last_name":req.body.lastname,
          "univ_name":req.body.univname,
          "email":req.body.email,
          "password":req.body.password,
          "created":today,
          "modified":today
        }
        con.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
          console.log('The solution is: ', results);
          res.send({
            "code":200,
            "success":"user registered sucessfully"
              });
        }
        });
      }
      exports.login = function(req,res){
        var email= req.body.email;
        var password = req.body.password;
        con.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
          // console.log('The solution is: ', results);
          if(results.length >0){
            if(results[0].password == password){
              // res.send({
              //   "code":200,
              //   "success":"login sucessfull",
              //    "name":JSON.stringify(JSON.parse(JSON.stringify(results)))
              //     });
                  
                  console.log(results);
                  //console.log(JSON.stringify(JSON.parse(JSON.stringify(results))))
                  let r1=JSON.parse(JSON.stringify(results))

                  const buyer_id=r1[0].id;
            console.log('buyer_id:',buyer_id);
            console.log(JSON.stringify(r1));
            res.send(JSON.stringify(r1)); 
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exits"
                });
          }
        }
        });
      }
      exports.students = function(req,res){
        console.log("Inside students");
        //res.json({ message: 'welocme to view students' });
        con.query('SELECT * FROM users',  function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          
        }else{
          // console.log('The solution is: ', results);
          
            let r1=JSON.parse(JSON.stringify(results))
            console.log(r1);
            res.send(JSON.stringify(r1));
          
          
        }
        });
      }
      exports.companysignup = function(req,res){
        var today = new Date();
        var companies={
          "company_name":req.body.companyname,
          "email":req.body.email,
          "password":req.body.password,
          "company_location":req.body.location,
          "created":today,
          "modified":today
        }
        con.query('INSERT INTO companies SET ?',companies, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          // res.send({
          //   "code":400,
          //   "failed":"error ocurred"
          // })
        }else{
          console.log('The solution is: ', results);
          // res.send({
          //   "code":200,
          //   "success":"user registered sucessfully"
          //     });
        }
        });
      }
      exports.compsignin = function(req,res){
        var email= req.body.email;
        var password = req.body.password;
        con.query('SELECT * FROM companies WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          
        }else{
          // console.log('The solution is: ', results);
          if(results.length >0){
            if(results[0].password == password){
              // res.send({
              //   "code":200,
              //   "success":"login sucessfull",
              //    "name":JSON.stringify(JSON.parse(JSON.stringify(results)))
              //     });
                  
                  console.log(results);
                  //console.log(JSON.stringify(JSON.parse(JSON.stringify(results))))
                  let r1=JSON.parse(JSON.stringify(results))

                  const buyer_id=r1[0].id;
            console.log('company_id:',buyer_id);
            console.log(JSON.stringify(r1));
            res.send(JSON.stringify(r1)); 
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exits"
                });
          }
        }
        });
      }
      exports.compjobpost = function(req,res){
        
        var job={
          "jobtitle":req.body.jobtitle,
          "postingdate":req.body.postingdate,
          "deadline":req.body.deadline,
          "location":req.body.location,
          "salary":req.body.salary,
          "jobdes":req.body.jobdes,
          "jobcat":req.body.jobcat,
          "company_id":req.body.comp_id
        }
        con.query('INSERT INTO compjobs SET ?',job, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          
        }else{
          console.log('The solution is: ', results);
          
        }
        });
      }
      exports.compjobs = function(req,res){
        console.log("Inside company jobs posted");
        //var id=req.body.comp_id;
        //res.json({ message: 'welocme to view students' });
        con.query('SELECT * FROM compjobs WHERE company_id=?',1,  function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          
        }else{
          // console.log('The solution is: ', results);
             console.log(results);
            let r1=JSON.parse(JSON.stringify(results))
            console.log(r1);
            res.send(JSON.stringify(r1));
          
          
        }
        });
      }
      exports.compeventpost = function(req,res){
        
        var job={
          "eventname":req.body.eventname,
          "description":req.body.description,
          "time":req.body.time,
          "date":req.body.date,
          "location":req.body.location,
          "eligibility":req.body.eligibility,
          "major":req.body.major,
          "company_id":req.body.comp_id
        }
        con.query('INSERT INTO events SET ?',job, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          
        }else{
          console.log('The solution is: ', results);
          
        }
        });
      }
      exports.compevents = function(req,res){
        console.log("Inside company events posted");
        //var id=req.body.comp_id;
        //res.json({ message: 'welocme to view students' });
        con.query('SELECT * FROM events WHERE company_id=?',1,  function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          
        }else{
          // console.log('The solution is: ', results);
             console.log(results);
            let r1=JSON.parse(JSON.stringify(results))
            console.log(r1);
            res.send(JSON.stringify(r1));
          
          
        }
        });
      }
      exports.updatedetails =function(req,res){
        console.log("updating user profile details");
        var details={
          
          "id":1,
          "experience":req.body.experience,
          "education":req.body.education,
          "skillset":req.body.skillset,


        }
        con.query('INSERT INTO studentdetails SET ?',details,function (error, results, fields) {
          if (error) {
            console.log("error ocurred",error);
            
          }else{
            console.log('inserted ', results);
            
          }
          });

      }
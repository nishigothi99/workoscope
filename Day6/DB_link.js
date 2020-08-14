
var mysql = require('mysql');
 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'workotest',
    multipleStatements: true
});
connection.connect();
var obj={
  "emp_id" : 27,
  "fname" :"Dhruvi",
   "lname" : "Patel",
   "email" : "dhruvip99@gmail.com",
   "dep_id": 19,
   "entrytime" : "now()"
}
var objDep = {
  "dep_name" : "Java",
  "loc_id" : 5,
  "loc_name" : "Vejalpur"
}
var objSkills={
  "skill_id": 13,
}
 
connection.query(`INSERT into location values(${objDep.loc_id},'${objDep.loc_name}')`, function(err, fields) {
    if(err) {
      return console.log("Error detected"+err);
    }
    // console.log(results[1]);
});


connection.query(`INSERT into department values(${obj.dep_id},'${objDep.dep_name}',${objDep.loc_id})`, function(err, fields) {
    if(err) {
      return console.log("Error detected"+err);
    }
    // console.log(results[1]);
});
 
connection.query(`INSERT into employee values(${obj.emp_id},'${obj.fname}','${obj.lname}','${obj.email}',${obj.dep_id},${obj.entrytime})`, function(err, fields) {
    if(err) {
      return console.log("Error detected"+err);
    }
    // console.log(results[1]);
});


connection.query(`INSERT into skill_emp values(${obj.emp_id},'${objSkills.skill_id}')`, function(err, fields) {
    if(err) {
      return console.log("Error detected"+err);
    }
    // console.log(results[1]);
});
 
connection.end();


/*const mysql = require('mysql');
const moment = require('moment');

const connection = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'workotest'
});
connection.connect(function(err) {         
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

connection.query('SELECT emp_id, firstname ,lastname, dep_id FROM employee', (err,rows) => {    // () anonymous function passing arguement err and rows 
  if(err) {
    return console.log("Error detected"+err);
  }
  console.log('Data received from Db:');
  // console.log(rows);
  var a=rows.map((items)=>{
    return items.firstname + " " + items.lastname
  })
  console.log(a)
  // console.log(rows[0]["emp_id"])
  // rows.forEach( (row) => {
  // console.log(`${row.emp_name} has department ID ${row.dep_id}`); 
// });
});


//Foreach , map , callback 
//write programs for all node element and understand various concept of node and JS
// moment
// search query 
// skill, name, last , email.
*/
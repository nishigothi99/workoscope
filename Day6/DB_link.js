const mysql = require('mysql');
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

const mysql = require('mysql');       //Require -- to include modules in our app
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

connection.query('SELECT * FROM employee', (err,rows) => {    // () anonymous function passing arguement err and rows 
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
  console.log(rows[0]["emp_id"])
  rows.forEach( (row) => {
  console.log(`${row.emp_name} has department ID ${row.dep_id}`); 
});
});
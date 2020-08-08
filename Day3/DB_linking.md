#### Created JSON-Package 
***
```
npm init -y
```

<br/>

#### Installed MYSQL
***
```
npm install mysql
```

<br/>

#### NodeJs connecting with Database 
***
```
const mysql = require('mysql');
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

connection.query('SELECT * FROM employee', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
  console.log(rows[0]["emp_id"])
  rows.forEach( (row) => {
  console.log(`${row.emp_name} has department ID ${row.dep_id}`);
});
});
```

<br/>

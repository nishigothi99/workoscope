const mysql = require('mysql');       //Require -- to include modules in our app
const connection = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'workotest'
});

function queries(conn)
{
    return new Promise(function(resolve, reject) {
        // The Promise constructor should catch any errors thrown on
        // this tick. Alternately, try/catch and reject(err) on catch.

        var query_str = "SELECT employee.emp_id, employee.emp_name, department.dep_name,location.loc_name, skills.skill_name FROM employee "+
                        "LEFT JOIN department ON employee.dep_id=department.dep_id LEFT JOIN location ON location.loc_id=department.loc_id "+
                        "LEFT JOIN skill_emp ON skill_emp.emp_id=employee.emp_id LEFT JOIN skills ON skills.skill_id=skill_emp.skill_id"+
                        " where skill_name = 'Python'" ;

        conn.query(query_str , function (err,rows) {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

queries(connection).then(function(rows) {
  console.log(rows)

    // now you have your rows, you can see if there are <20 of them
}).catch(function(error) {
      console.log(error.message)
    })
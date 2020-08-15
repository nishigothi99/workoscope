
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
  "fname" :"Harsh",
}

var objSkills={
  "skill_id": 13,
}
/*
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
});*/
connection.query(`INSERT into mytable (fname) values('${obj.fname}')`, function(err, fields) {
    if(err) {
      return console.log("Error detected"+err);
    }
    const v=fields["insertId"];
    newq(v)
});

// connection.query(`SELECT * FROM mytable WHERE fname = "${obj.fname}" `,function(err,rows){
//   if(err){
//     return console.log("Error detected"+err);
//   }
//   console.log(rows)
//   const r = rows[0]["ID"]
//   newq(r)
// });
function newq(v){
  connection.query(`Insert into mytable_skill values (${v},${objSkills.skill_id})`, function(err, fields) {
    if(err) {
      return console.log("Error detected"+err);
    }

    // console.log(results[1]);
});

}

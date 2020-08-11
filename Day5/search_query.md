#### Added lastname and email 
***
```
Alter table employee add column (lastname varchar(225));
Alter table employee add column (email varchar(225));
```

<br/>

#### Changed the name of emp_name column to firstname 
***
```
ALTER TABLE employee change emp_name firstname varchar(225);
```

<br/>

#### Arranged the columns
***
```
ALTER TABLE employee MODIFY lastname varchar(225) AFTER firstname
ALTER TABLE employee MODIFY email varchar(225) AFTER lastname
```

<br/>

#### Search Query 
***
```
use workotest;
SELECT employee.emp_id, employee.firstname, employee.lastname,
employee.email, department.dep_name,location.loc_name, skills.skill_name
FROM employee
LEFT JOIN department ON employee.dep_id=department.dep_id
LEFT JOIN location ON location.loc_id=department.loc_id
LEFT JOIN skill_emp ON skill_emp.emp_id=employee.emp_id
LEFT JOIN skills ON skills.skill_id=skill_emp.skill_id
where firstname like '%ja%' or lastname like '%ja%' or email like '%ja%';
```

<br/>


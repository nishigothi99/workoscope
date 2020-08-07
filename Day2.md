#### Join employee table with department and location table 
***
```
use workotest;
SELECT employee.emp_id, employee.emp_name, department.dep_id , department.dep_name, location.loc_id, location.loc_name
FROM department
LEFT JOIN employee ON employee.dep_id=department.dep_id
LEFT JOIN location ON location.loc_id=department.loc_id;
```

<br/>

#### How many employee in each department 
***
```
select dep_id, count(*) AS TOTAL_EMP from employee GROUP BY dep_id;
```

<br/>

#### Show the employee which belong to nagar in the location
***
```
SELECT employee.emp_id, employee.emp_name, location.loc_name
FROM department
LEFT JOIN employee ON employee.dep_id=department.dep_id
LEFT JOIN location ON location.loc_id=department.loc_id
WHERE loc_name LIKE '%nagar%';

```
<br/>

#### How many employee in each location 
***
```
SELECT location.loc_name, count(*) AS Total_emp
FROM department
LEFT JOIN employee ON employee.dep_id=department.dep_id
LEFT JOIN location ON location.loc_id=department.loc_id
group by loc_name;
```

<br/>

#### Search query to find a list of employees who have 'ah' in their name or in their location name
***
```
SELECT employee.emp_id, employee.emp_name, location.loc_name
FROM department
LEFT JOIN employee ON employee.dep_id=department.dep_id
LEFT JOIN location ON location.loc_id=department.loc_id
WHERE loc_name LIKE '%ah%' OR emp_name LIKE "%ah%" ;
```

<br/>

#### Alter table 
***
```
ALTER TABLE employee ADD entrytime datetime
```

<br/>

#### Query to find the list of employee added in ahmedabad in last 60 mins (Interval 3 min)
***
```
select *from employee where entrytime >= date_sub(now(),interval 3 minute);
```

#### Created a table for skills (Skill_id and skill_name) and skill_emp (emp_id and skill_id)
***
```
CREATE table skill_emp (emp_id INT, skill_id INT);
CREATE table skills (skill_id INT, skill_name VARCHAR(225));
```

<br/>

#### Employee name  with a specific skills like Python 
***
```
SELECT employee.emp_id, employee.emp_name, skills.skill_name
FROM employee
LEFT JOIN skill_emp ON employee.emp_id=skill_emp.emp_id
LEFT JOIN skills ON skills.skill_id=skill_emp.skill_id
WHERE skill_name="Python";
```

<br/>

#### All the detail of employee whose skill is python
***
```
SELECT employee.emp_id, employee.emp_name, department.dep_name,location.loc_name, skills.skill_name
FROM employee
LEFT JOIN department ON employee.dep_id=department.dep_id
LEFT JOIN location ON location.loc_id=department.loc_id
LEFT JOIN skill_emp ON skill_emp.emp_id=employee.emp_id
LEFT JOIN skills ON skills.skill_id=skill_emp.skill_id
Where skill_name = "Python";
```

<br/>

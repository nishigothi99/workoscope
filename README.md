### CREATING A DATABSE
***
```
CREATE database workotest;
```
<br/>

### CREATING A TABLE 
***
```
create table employee (emp_id int , emp_name VARCHAR(225) , dep_id int);
create table department (dep_id int , dep_name VARCHAR(225) , loc_id int);
create table location (loc_id int , loc_name VARCHAR(225));
```
<br/>

### Inserting Values
***
##### FOR EMPLOYEE TABLE
```
INSERT into employee values(16, "Parvish", 016);
INSERT into employee values(17, "Harshil", 007);
INSERT into employee values(18, "Maulik", 007);
INSERT into employee values(19, "Dhruvil", 018);
INSERT into employee values(20, "Vaishnavi", 016);
INSERT into employee values(21, "Prachi", 011);
INSERT into employee values(22, "Renish", 018);
INSERT into employee values(23, "Honey", 011);
INSERT into employee values(24, "Dhyani", 018);
INSERT into employee values(25, "Dev", 016);
```
##### FOR DEPARTMENT TABLE
```
INSERT into department values(016, "IT", 01);
INSERT into department values(007, "Python", 02);
INSERT into department values(018, "NodeJs", 02);
INSERT into department values(011, "DataScience", 03);
```
##### FOR LOCATION TABLE 
```
INSERT into location values(01, "Satellite");
INSERT into location values(02, "Gandhinagar");
INSERT into location values(03, "Maninagar");

```
<br/>

### GROUP BY
***
```
SELECT dep_id, count(*)
FROM employee
GROUP BY dep_id;
```
<br/>

### SORTING
***
```
Select * from employee order by emp_name;
```

### JOIN
***
##### RIGHT JOIN 
```
SELECT employee.emp_id, employee.emp_name, department.dep_id , department.dep_name
FROM department
RIGHT JOIN employee ON employee.dep_id=department.dep_id;
```

##### LEFT JOIN 
```
SELECT employee.emp_id, employee.emp_name, department.dep_id , department.dep_name
FROM department
LEFT JOIN employee ON employee.dep_id=department.dep_id;

```

##### INNER JOIN 
```
SELECT employee.emp_id, employee.emp_name, department.dep_id , department.dep_name
FROM department
inner JOIN employee ON employee.dep_id=department.dep_id;
```

### WHERE
***
``` 
SELECT * FROM employee where dep_id = 018;
```

### WILDCARD
***
```
SELECT * FROM employee
WHERE emp_name LIKE '%r%';
```

### NOT IN 
***
```
SELECT * FROM employee
WHERE dep_id NOT IN (16, 7);
```

### IN
***
```
SELECT * FROM employee
WHERE dep_id IN (16, 7);
```

### BETWEEN
***
```
SELECT * FROM employee
WHERE emp_id BETWEEN 18 AND 22;
```

### ALIAS
***
```
SELECT emp_id AS ID, emp_name AS name
FROM employee;
```

### AND
***
```
SELECT * FROM employee
WHERE dep_id=07 AND emp_id=18;
```

# OR
***
```
SELECT * FROM employee
WHERE dep_id=07 OR emp_id=18;
```

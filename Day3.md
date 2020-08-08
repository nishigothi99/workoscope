#### Each skills in single row 
***
```
SELECT employee.emp_id, employee.emp_name, GROUP_CONCAT(DISTINCT skill_name) AS "h"
FROM employee
LEFT JOIN skill_emp ON employee.emp_id=skill_emp.emp_id
LEFT JOIN skills ON skills.skill_id=skill_emp.skill_id
group by emp_id;
```

<br/>

#### Add "people" after count 
***
```
select dep_id, concat(count(*), " people") AS Total_Emp from employee GROUP BY dep_id;
```

<br/>

#### Drop the column entrytime (datetime)``
***
```
ALTER TABLE employee
Drop column entrytime ;
```

<br/>

#### Added the column named entrytime whose datatype is TIMESTAMP
***
```
ALTER TABLE employee
ADD entrytime timestamp;
```

<br/>

#### Added the data into column
***
```
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 16;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 17;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 18;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 19;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 20;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 21;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 22;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 23;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 24;
UPDATE employee SET entrytime=timestamp(now()) WHERE emp_id = 25;
```

<br/>

#### Query to find the list of employee in last 5 minute and 30 second
***
```
SELECT * FROM employee
WHERE entrytime >= NOW() - INTERVAL 5.30 minute_second;
```

<br/>


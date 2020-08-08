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

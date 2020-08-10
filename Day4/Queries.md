#### Learn about Unix timestamp.. (Learn different types of function regarding unix timestamp)
***
```
SELECT * FROM mytable WHERE DATE_SUB(now(),INTERVAL 1 second) <= from_unixtime(epoch)
```
```
SELECT *,DATE_FORMAT(from_unixtime(epoch), '%h %i %s') FROM workotest.mytable;
```
```
SELECT *,EXTRACT(YEAR FROM from_unixtime(epoch)) FROM workotest.mytable;
```

<br/>

#### Learn about composite unique key
***
```
use workotest;
ALTER TABLE skill_emp ADD UNIQUE (`emp_id`, `skill_id`);
```

<br/>

#### Learning about all the relational attributes available at the time of creating table..
***
```
ALTER TABLE skill_emp
ADD FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
ADD FOREIGN KEY (emp_id) References employee(emp_id);
```
Similarily done with all other tables 

<br/>

#### Read about npm init
***
```
npm init <initializer> can be used to set up a new or existing npm package.
where initializer is an npm package named, which will be installed.
```

<br/>


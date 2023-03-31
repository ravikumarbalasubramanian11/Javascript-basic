CREATE TABLE player(
    name VARCHAR,
    age INT,
    address TEXT
);
/*SQL 

//used to create a table in database
CRUD - operations that do in SQL

C- CREATE
R- RETRIVE
U- UPDATE
D- DELETE




CREATE TABLE player(
    name VARCHAR,
    age INT,
    address TEXT
);


//Table info
PRAGMA TABLE_INFO(player);


//INSERT clause
INSTERT INTO 
    player (name, age, adress)
VALUES
    (Ravi,19,India),
    (Edward,79,Ausralia);

//SELECT Clause
SELECT 
    name,
    age
FROM 
    player;

//select all column
SELECT *
FROM player;


WHERE Clauses

SELECT *
FROM player
WHERE name=ravi;

UPDATE Clauses
        UPDATE 
            player
        SET
            score=100;


//update using where
        UPDATE 
            player
        SET
            score=100
        WHERE 
            name="ram";



//DELETE ROW
DELETE FROM 
    player;
WHERE
    name="ram";


//DROP 
DROP TABLE player;

//ALTER clauses

// ADD -To add the new column
// RENAME - To rename existing column
// DELETE - To delete the existing Column
// MODIFY - To modify the column

// ADD
ALTER TABLE
    player
ADD
    score INT;

// RENAME
ALTER TABLE
    player
RENAME
    name1 TO name2;

//DELETE
ALTER TABLE
    player
DROP COLUMN column_name


// MODIFY
ALTER TABLE table_name
ALTER COLUMN column_name datatype;




*/


/*// IN and BETWEEN Operator


SELECT
  *
FROM
  product
WHERE
  brand = Puma,
  brand = Levi's,
  brand = Mufti,
  brand = Lee,
  brand = Denim;


// INOperator
SELECT
  *
FROM
  product
WHERE
  brand IN ( "Puma", "Levi's", "Mufti", "Lee", "Denim");

//BETWEEN OPERATOR
SELECT
*
FROM
    product
WHERE
    price INBETWEEN 4000 AND 8000;


//ORDER BY and DISTINCT

//ORDER by is used order the data in ASC / DESC


SELECT
  DISTINCT brand
FROM
  product
ORDER BY
  brand;



  LIMIT AND OFFSET
  LIMIT is used to no of data we want to see
  OFFSET is used to where the limit is starts with

SELECT
    NCT brand
FROM
    product
ORDER BY
    brand
LIMIT
    10
OFFSET 
    5;

    //Above example the Pagination is starts with 
    6 to 16


Aggregation

COUNT-	Counts the number of values
SUM-	Adds all the values
MIN-	Returns the minimum value
MAX-	Returns the maximum value
AVG-	Calculates the average of the values

//Count
SELECT
  COUNT(*)
FROM
  player_match_details;
//count the table 

//Sum
SELECT
    SUM(score)
FROM
    player_match_details;
//sum of score

//AVG
SELECT
    AVG(score)
FROM
    player_match_details;
    //output =Average of score

//MAX
SELECT
    MAX(score)
FROM
    player_match_details;
    //output = MAX score

//MIN
SELECT
    MIN(score)
FROM
    player_match_details
    //output = MIN score

*/
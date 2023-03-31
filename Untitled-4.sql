/*
Logical Operators
* AND
* OR
* NOT

Order Precedence 
NOT
AND
OR

//AND
SELECT
  *
FROM
  product
WHERE
  category = "Clothing"
  AND price <= 1000;

  OUTPUT= Filter the clothing category and where price is less than 1000

//OR
SELECT
  *
FROM
  product
WHERE
  category = "Clothing"
  OR price <= 1000;

  OUTPUT= Filter the clothing category or where price is less than 1000
  in other category also

/NOT
SELECT
  *
FROM
  product
WHERE
  NOT name LIKE %cake%;

    OUTPUT= Negate condition of the "name LIKE %cake%" are display in the output

*/
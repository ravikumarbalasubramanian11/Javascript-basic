/*
//String Operation

LIKE- Exact match
Wildcard charater

% - zero or more 
_ - Single characters

Exact Match

SELECT
    *
FROM
    Product
WHERE
    c1 LIKE Toys;

    //OUTPUT= filters all Toys in c1


Starts With
SELECT
    *
FROM
    Product
WHERE
    c1 LIKE Toys%;

    //OUTPUT= filters all Toys(starts with) in c1 
    Toys Product
    Toys Play


Ends With
SELECT
    *
FROM
    Product
WHERE
    c1 LIKE %Toys;

    //OUTPUT= filters all Toys(Ends with) in c1 
     Product Toys
     Play Toys


Contains With
SELECT
    *
FROM
    Product
WHERE
    c1 LIKE %Toys%;

    //OUTPUT= filters all Toys(Contains with) in c1 
     Product Toys barbie
     Play Toys kids


Pattern Matching With
SELECT
    *
FROM
    Product
WHERE
    c1 LIKE T_o_s;

    //OUTPUT= filters all Toys(Pattern matching) in c1 
    Toys



*/
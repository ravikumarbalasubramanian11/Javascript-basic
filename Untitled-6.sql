/*
//GROUP BY with HAVING
//AS is alias

SELECT
  name, SUM(score) as total_score
FROM
  player_match_details
GROUP BY name;

Step 1 - Its group by name
Step 2 - next sum the score by name grouping

//HAVING
SELECT
  name, SUM(score) as total_score
FROM
  player_match_details
GROUP BY name
HAVING total_score >50;

*/
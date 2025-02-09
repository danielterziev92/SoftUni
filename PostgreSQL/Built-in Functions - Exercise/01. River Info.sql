CREATE VIEW view_river_info
AS
SELECT concat_ws(' ',
                 concat('The river ', river_name),
                 concat('flows into the ', outflow),
                 concat('and is ', length),
                 'kilometers long.'
           ) AS "River Information"
FROM rivers
ORDER BY river_name;
CREATE OR REPLACE FUNCTION fn_count_employees_by_town(town_name VARCHAR(20))
    RETURNS INT AS
$$
DECLARE
    curr_town_id INT;

BEGIN
    curr_town_id := (SELECT town_id FROM towns WHERE name = town_name);
    RETURN (SELECT COUNT(*)
            FROM employees AS e
                     JOIN addresses AS a USING (address_id)
            WHERE town_id = curr_town_id);
END;
$$
    LANGUAGE plpgsql;

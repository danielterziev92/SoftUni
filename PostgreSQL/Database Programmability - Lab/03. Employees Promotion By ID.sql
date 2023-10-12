CREATE PROCEDURE sp_increase_salary_by_id(id INT)
AS
$$
BEGIN
    UPDATE employees
    SET salary = salary * 1.05
    WHERE employee_id = id;

    IF FOUND THEN
        COMMIT;
    ELSE
        ROLLBACK;
    END IF;
END;
$$
    LANGUAGE plpgsql;
CREATE OR REPLACE PROCEDURE sp_retrieving_holders_with_balance_higher_than(searched_balance NUMERIC)
AS
$$
DECLARE
    holder_info RECORD;

BEGIN
    FOR holder_info IN SELECT concat_ws('', ah.first_name, ah.last_name) as full_name,
                              sum(a.balance)                             as total_balance
                       FROM accounts as a
                                JOIN account_holders as ah
                                     ON a.account_holder_id = ah.id
                       GROUP BY full_name
                       HAVING sum(a.balance) > searched_balance
                       ORDER BY full_name ASC
        LOOP
            RAISE NOTICE '% - %', holder_info.full_name, holder_info.total_balance;
        END LOOP;
END;
$$
    LANGUAGE plpgsql;

CALL sp_retrieving_holders_with_balance_higher_than(20000)
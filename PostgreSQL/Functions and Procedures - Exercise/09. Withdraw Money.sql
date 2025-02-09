CREATE OR REPLACE PROCEDURE
    sp_withdraw_money(account_id INT, money_amount NUMERIC(10, 4))
AS
$$
DECLARE
    money_in_bank_amount NUMERIC;

BEGIN
    money_in_bank_amount := (SELECT balance FROM accounts WHERE id = account_id);

    IF money_in_bank_amount >= money_amount THEN
        UPDATE accounts
        SET balance = balance - money_amount
        WHERE id = account_id;
    ELSE
        RAISE NOTICE 'Insufficient balance to withdraw %', money_in_bank_amount;
    END IF;
END;
$$
    LANGUAGE plpgsql;
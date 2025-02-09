CREATE OR REPLACE PROCEDURE sp_deposit_money(account_id INT, money_amount DECIMAL)
AS
$$
BEGIN
    UPDATE accounts
    SET balance = balance + money_amount
    WHERE id = account_id;
END;
$$
    LANGUAGE plpgsql;
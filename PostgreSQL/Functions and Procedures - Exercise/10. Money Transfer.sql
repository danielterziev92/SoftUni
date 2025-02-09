CREATE OR REPLACE PROCEDURE
    sp_transfer_money(sender_id INT, receiver_id INT, amount NUMERIC(10, 4))
AS
$$
DECLARE
    sender_balance   NUMERIC := (SELECT balance
                                 FROM accounts
                                 WHERE id = sender_id);
    receiver_balance NUMERIC := (SELECT balance
                                 FROM accounts
                                 WHERE id = receiver_id);
    temp_balance     NUMERIC;

BEGIN
    IF sender_balance >= amount THEN
        CALL sp_withdraw_money(sender_id, amount);
    ELSE
        ROLLBACK ;
    END IF;

    CALL sp_deposit_money(receiver_id, amount);

    temp_balance := (SELECT balance FROM accounts WHERE id = sender_id);
    IF sender_balance - amount <> temp_balance THEN
        ROLLBACK;
    END IF;

    temp_balance := (SELECT balance FROM accounts WHERE id = receiver_id);
    IF receiver_balance + amount <> temp_balance THEN
        ROLLBACK;
    END IF;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION fn_cash_in_users_games(game_name VARCHAR(50))
    RETURNS TABLE
            (
                total_cash NUMERIC
            )
AS
$$
BEGIN
    RETURN QUERY
        WITH OddRows AS (SELECT cash,
                                row_number() over (order by ug.cash DESC) as row_numb
                         FROM users_games as ug
                                  LEFT JOIN games as g
                                            ON ug.game_id = g.id
                         WHERE g.name = game_name)
        SELECT trunc(sum(cash), 2) as total_cash
        FROM OddRows
        WHERE row_numb % 2 = 1;
END;
$$
    LANGUAGE plpgsql;
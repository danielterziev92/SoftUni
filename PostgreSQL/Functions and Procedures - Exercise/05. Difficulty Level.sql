CREATE OR REPLACE FUNCTION fn_difficulty_level(level INT)
    RETURNS VARCHAR(50) AS
$$
BEGIN
    IF (level <= 40) THEN
        RETURN 'Normal Difficulty';
    ELSIF (level BETWEEN 41 AND 60) THEN
        RETURN 'Nightmare Difficulty';
    ELSIF (level > 60) THEN
        RETURN 'Hell Difficulty';
    END IF;
END;
$$
    LANGUAGE plpgsql;

SELECT user_id,
       level,
       cash,
       fn_difficulty_level(level) AS difficulty_level
FROM users_games
ORDER BY user_id ASC;
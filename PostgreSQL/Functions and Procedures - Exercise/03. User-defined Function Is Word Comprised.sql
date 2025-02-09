-- CREATE OR REPLACE FUNCTION fn_is_word_comprised(set_of_letter VARCHAR(50), word VARCHAR(50))
--     RETURNS BOOLEAN AS
-- $$
-- DECLARE
--     word_length INT := length(word);
--     i           INT := 1;
--
-- BEGIN
--     WHILE i <= length(set_of_letter)
--         LOOP
--             IF position(substring(set_of_letter, i, 1) in word) > 0 THEN
--                 word_length := word_length - 1;
--                 IF word_length = 0 THEN
--                     RETURN true;
--                 END IF;
--             END IF;
--             i := i + 1;
--         END LOOP;
--     RETURN false;
-- END;
-- $$
--     LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION fn_is_word_comprised(set_of_letter VARCHAR(50), word VARCHAR(50))
    RETURNS BOOLEAN AS
$$
BEGIN
    RETURN trim(lower(word), lower(set_of_letter)) = '';
END ;
$$
    LANGUAGE plpgsql;
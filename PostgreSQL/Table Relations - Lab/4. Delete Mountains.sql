CREATE TABLE mountains
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE peaks
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(50),
    mountain_id INT,

    CONSTRAINT fk_mountain_id
        FOREIGN KEY (mountain_id)
            REFERENCES mountains (id)
            ON DELETE CASCADE
);
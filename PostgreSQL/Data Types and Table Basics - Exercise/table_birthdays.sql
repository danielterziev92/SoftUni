CREATE TABLE minions_birthdays(
    id INT UNIQUE NOT NULL ,
    name VARCHAR(50),
    date_of_birth DATE,
    age INT,
    present VARCHAR(100),
    party TIMESTAMPTZ
)
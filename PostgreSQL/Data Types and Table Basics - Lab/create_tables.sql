CREATE TABLE
    employees
(
    id             serial PRIMARY KEY NOT NULL,
    first_name     character varying(30),
    last_name      character varying(50),
    hiring_date    date DEFAULT '2023-01-01'::date,
    salary         numeric(10, 2),
    devices_number integer
);

CREATE TABLE
    departments
(
    id          serial PRIMARY KEY NOT NULL,
    name        character varying(50),
    code        character(3),
    description text
);

CREATE TABLE
    issues
(
    id          serial PRIMARY KEY UNIQUE,
    description character varying(150),
    date        date,
    start       timestamp
);
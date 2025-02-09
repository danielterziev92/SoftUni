CREATE TABLE employees_projects
(
    id          SERIAL PRIMARY KEY,
    employee_id INT,
    project_id  INT,

    CONSTRAINT fk_employee_project
        FOREIGN KEY (employee_id)
            REFERENCES employees (id),
    FOREIGN KEY (project_id)
        REFERENCES projects (id)
);
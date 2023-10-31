INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("Legal"),
    ("HR"),
    ("Marketing"),
    ("PR");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Manager", 1000000, 1),
    ("Accountant", 90000, 2),
    ("Janitor", 45000, 3),
    ("Sales Rep", 75000, 4),
    ("Recruiter", 85000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Jake", "Roberts", 4, null),
    ("Mackenzie", "Trenner", 1, 1),
    ("Jenny", "Thurman", 2, null),
    ("John", "Smith", 3, null),
    ("Greg", "Clinton", 5, null);
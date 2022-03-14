INSERT INTO department (name)
VALUES
    ("Finance"),
    ("Legal"),
    ("Marketing"),
    ("Engineering"),
    ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Lead Engineer", "90000", 4),
    ("Lawyer", "80000", 2),
    ("Software Engineer", "60000", 4),
    ("Sales Representative", "50000", 5),
    ("Marketing Strategist", "60000", 3),
    ("Accountant", "65000", 1);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Bob", "Rich", 2, null),
    ("Sam", "Thompson", 1, null),
    ("Chris", "Wall", 3, null),
    ("Pual", "Acorn", 4, null),
    ("Jeff", "Lantern", 5, null),
    ("Emily", "Fournier", 6, null);
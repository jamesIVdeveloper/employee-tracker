const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "task",
      message: "Which would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
    {
      type: "input",
      name: "department",
      message: "What is the name of the department?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a department!");
          return false;
        }
      },
    },
  ]);
};
console.log(console.table(`SELECT * FROM departments;`));
promptUser();

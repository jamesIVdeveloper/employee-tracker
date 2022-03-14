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
  ]);
};

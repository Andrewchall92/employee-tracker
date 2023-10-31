const inquire = require('inquirer');
const { viewDepartment, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');

function mainMenu() {
inquire
    .prompt([
        {
            name: 'operation',
            message: 'What would you like to do?',
            type: 'list',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ]).then(answers => {
        switch (answers.operation) {
            case 'View all departments':
                viewDepartment();
                mainMenu();
                break;
            case 'View all roles':
                viewRoles();
                mainMenu();
                break;
            case 'View all employees':
                viewEmployees();
                mainMenu();
                break;
            case 'Add a department':
                addDepartment();
                mainMenu();
                break;
            case 'Add a role':
                addRole();
                mainMenu();
                break;
            case 'Add an employee':
                addEmployee();
                mainMenu();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                mainMenu();
                break;
        }
    });
}

mainMenu();
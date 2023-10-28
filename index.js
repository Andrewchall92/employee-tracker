const inquire = require('inquirer');
const mysql = require('mysql2');

inquire
    .prompt([
        {
            name: 'operation',
            message: 'What would you like to do?',
            type: 'list',
            choices: [
                'View all departments',
                'View all rolls',
                'View all employees',
                'Add a department',
                'Add a roll',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ]).then(answers => {
        switch (answers.operation) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRolls();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a roll':
                addRoll();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRoll();
                break;
        }
    });
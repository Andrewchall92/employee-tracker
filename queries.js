const connection = require('./dbConnection');
const inquire = require('inquirer');
const mainMenu = require('./index');

function viewDepartment() {
  connection.query('SELECT * FROM department;', (error, results) => {
    if (error) {
      console.error('Error executing query;', error);
      return;
    }
    console.table(results);
  });
};

function viewRoles() {
    connection.query('SELECT * FROM roles;', (error, results) => {
        if (error) {
            console.error('Error execute query:', error);
            return;
        }
        console.table(results);
    });
};

function viewEmployees() {
  connection.query('SELECT * FROM employee;', (error, results) => {
    if (error) {
      console.error('Error executing query;', error);
      return;
    }
    console.table(results);
  });
};

function addDepartment() {
  inquire
    .prompt([
      {
        name: 'name',
        message: 'Enter new department name',
        type: 'input'
      }
    ])
    .then(answers => {
      const name = answers.name;
      const query = `INSERT INTO department (name) VALUES ('${name}')`;
      connection.query(query, [name], (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
        }
        console.log('Department added successfully!');
      });
    });
};

function addRole() {
  inquire
    .prompt([
      {
        name: 'title',
        message: 'Enter new role title',
        type: 'input'
      },
      {
        name: 'salary',
        message: 'Enter salary',
        type: 'input'
      },
      {
        name: 'department',
        message: 'Enter department',
        type: 'input'
      }
    ])
    .then(answers => {
      const title = answers.title;
      const salary = answers.salary;
      const department = answers.department;
      const newRole = `INSERT INTO roles (title, salary, department) 
                      VALUES ('${title}', '${salary}', '${department}')`;
      connection.query(newRole, (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
        }
        console.log('Department added successfully!');
      });
    });
};
module.exports = {viewDepartment, viewRoles, viewEmployees, addDepartment, addRole}

// addEmployee, updateEmployeeRole }
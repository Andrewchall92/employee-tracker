const connection = require('./dbConnection');

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

module.exports = {viewDepartment, viewRoles}

// , viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }
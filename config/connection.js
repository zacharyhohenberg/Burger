// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.burgers_db) {

	connection = mysql.createConnection(process.env.burgers_db);
} else {

	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;

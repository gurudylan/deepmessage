let mysql = require('mysql');

function create() {
	return mysql.createConnection(
		{
			host: 'localhost',
			user: 'root', 
			password: '', 
			database: 'deep_message'
		}
	);
}

module.exports = () => create;
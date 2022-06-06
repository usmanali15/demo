const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	password: 'usman',
	host: 'localhost',
	port: 5432,
	database: 'perntodo',
});

module.exports = pool;

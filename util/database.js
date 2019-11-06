const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b734bf2b717e37',
    database: 'heroku_25164e32b44a522',
    password: '90b45c4a'
});

module.exports = pool.promise();
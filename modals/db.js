const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql3',
    user: 'root',
    password: '',
    database: 'incloud'
});
connection.connect(function (error) {
    if (!!error) {
        console.log('not connected');
    } else {
        console.log('connected');
    }
});
module.exports = connection;

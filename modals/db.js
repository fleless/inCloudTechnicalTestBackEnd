const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql3',
    user: 'root',
    password: '',
    database: 'incloud'
});
setTimeout(function() {
    connection.connect(function (error) {
        if (!!error) {
            console.log('not connected');
        } else {
            console.log('connected');
        }
    });
}, 30000)
module.exports = connection;

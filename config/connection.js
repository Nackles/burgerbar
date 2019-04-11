require('dotenv').config()
var mysql = require('mysql')
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'burgers_db'
    })
}

connection.connect(function (err) {
    if (err) throw err
    console.log('connected as id: ' + connection.threadid)
})

module.exports = connection;
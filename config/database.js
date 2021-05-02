const mysql = require("mysql");

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_crud',
})

const path = require('path');
var mysql = require('mysql2');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "geeklets"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
 
});

module.exports = con;
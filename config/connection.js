const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB)
}
"user strict";

const mysql = require("mysql");

//local mysql db connection
const dbConn = mysql.createConnection({
	host: "database-1.cd0ithle1pfb.us-east-1.rds.amazonaws.com",
	user: "admin",
	password: "xvP5&$cr0R3o",
	database: "innodb",
});
dbConn.connect(function (err) {
	if (err) throw err;
	console.log("Database Connected!");
});
module.exports = dbConn;

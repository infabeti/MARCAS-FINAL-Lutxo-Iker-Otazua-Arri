var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost', 
  	user: 'root',      
  	password: 'elorrieta',      
  	database: 'retofinal' 
}); 

conn.connect(function(err) {
	if (err) throw err;
	console.log('La base de datos se ha conectado con exito.');
});

module.exports = conn;
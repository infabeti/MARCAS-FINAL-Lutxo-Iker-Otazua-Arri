var express = require('express');
var router = express.Router();
var db = require('../conexiondb');

router.get('/register', function(req,res,next) {
	res.render('registro.html');
});

router.post('/register', function(req,res,next){
	inputData = {
		user: req.body.user,
		email: req.body.email,
		password: req.body.password,
		passwordc: req.body.passwordc
	}

	var sql = 'SELECT * FORM usuarios where email = ?';
	db.query(sql, [inputData.email], function(err,data,fields){
		if(err) throw err
			if(data.length > 1){
				var msg = inputData.email + "Ya existe";
			} else if(inputData.passwordc != inputData.password){
				var msg = "Las contraseñas no coinciden";
			} else {
				var sql = 'INSERT INTO usuarios SET ?';
				db.query(sql, inputData, function(err,data){
					if (err) throw err;
				});
				var msg = "Te has registrado con exito"
			}
			res.render('registro', {alerMsg:msg})
	})
});

module.exports = router;
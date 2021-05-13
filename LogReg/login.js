var express = require('express');
var router = express.Router();
var db = require('../conexiondb');

router.get('/login', function(req, res, next){
	res.render('login.html');
});

router.post('/login', function(req, res){
	var email = req.body.email;
	var password = req.body.password;

	var sql = 'SELECT * FORM usuarios WHERE email =? and password = ?';
	db.query(sql, [email, password], function(err,data,fields){
		if(err) throw err
			if(data.length > 0){
				req.session.loggedinUser = true;
				req.session.email = email;
				res.redirect('../index.html');
			} else {
				res.render('login.html', {alertMsg:"Tu email o tu contraseña son incorrectas"});
			}
	})
})

module.exports = router;
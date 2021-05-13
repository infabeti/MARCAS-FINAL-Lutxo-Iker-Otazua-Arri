const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

var registrationRouter = require('./LogReg/register');
var loginRouter = require('./LogReg/login');
var dashboardRouter = require('./LogReg/dashboard');
var logoutRouter = require('./LogReg/logout');

app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);

app.use(cors());
app.use(express.static(path.join(__dirname + "/public"),{extensions: ['html']} ));


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname +'/index.html'),function(error){
        if (error) {res.status(404).send("<h2>error 404</h2>");
    }
    });
});

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
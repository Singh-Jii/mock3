const exp = require('express');


const my_auth_control = require('../control/auth_control');


const my_route = exp.Router();


my_route.post('/register', my_auth_control.reg_Client);


my_route.post('/login', my_auth_control.loginClient);


module.exports = my_route;

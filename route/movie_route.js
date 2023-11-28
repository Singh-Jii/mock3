const exp = require('express');


const movie_control = require('../control/movie_control');


const my_auth = require('../middleware/auth');

const my_route = exp.Router();


my_route.get('/', my_auth.auth_Client, movie_control.get_evry_films);


my_route.get('/:id', my_auth.auth_Client, movie_control.get_film_by_id);


module.exports = my_route;

const exp = require('express');


const review_control = require('../control/review_control');


const my_auth = require('../middleware/auth');

const my_route = exp.Router();

my_route.post('/:movieId', my_auth.auth_Client, review_control.plusFeedback);

my_route.get('/:movieId', review_control.get_feedbacks_by_film_id);


my_route.put('/:reviewId', my_auth.auth_Client, review_control.change_feedback_by_id);


my_route.delete('/:reviewId', my_auth.auth_Client, review_control.del_feedback_by_id);


module.exports = my_route;

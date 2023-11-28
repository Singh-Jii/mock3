const Feedback = require('../model/review_model');


const Film = require('../model/movie_model');


const plusFeedback = async (request, response) => {


  try {


    const { rating, comment } = request.body;


    const film_id = request.params.film_id;

    const film = await Film.findById(film_id);


    if (!film) {

      return response.status(404).json({ msg: 'error' });


    }


    const newFeedback = new Feedback({


      client: request.client._id,

      film: film_id,


      rating,

      comment,


      timestamp: new Date(),


    });


    await newFeedback.save();

    film.feedbacks.push(newFeedback._id);


    await film.save();

    response.status(201).json({ msg: 'review completed' });



  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }



};


const get_feedbacks_by_film_id = async (request, response) => {


  try {


    const film_id = request.params.film_id;

    const film_with_feedback = await Film.findById(film_id).populate('reviews');

    if (!film_with_feedback) {


      return response.status(404).json({ msg: 'error' });


    }


    response.status(200).json(film_with_feedback.feedbacks);


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};


const change_feedback_by_id = async (request, response) => {


  try {


    const feedback_id = request.params.feedback_id;


    const { rating, comment } = request.body;

    await Feedback.findByIdAndUpdate(feedback_id, { rating, comment });

    response.status(204).end();


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};



const del_feedback_by_id = async (request, response) => {


  try {


    const feedback_id = request.params.feedback_id;

    const feedback = await Feedback.findById(feedback_id);


    if (!feedback) {

      return response.status(404).json({ msg: 'error' });


    }

    await Film.findByIdAndUpdate(feedback.film, { $pull: { feedbacks: feedback_id } });

    await Feedback.findByIdAndDelete(feedback_id);

    response.status(202).json({ msg: 'deletion of review completed' });


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};


module.exports = {plusFeedback,get_feedbacks_by_film_id,change_feedback_by_id,del_feedback_by_id};

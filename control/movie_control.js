const Film = require('../model/movie_model');


const get_evry_films = async (request, response) => {


  try {


    const films = await Film.find();

    response.status(200).json(films);


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};


const get_film_by_id = async (request, response) => {


  try {


    const film_id = request.params.id;

    const film = await Film.findById(film_id);


    if (!film) {


      return response.status(404).json({ msg: 'error' });


    }

    response.status(200).json(film);


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};


module.exports = {get_evry_films,get_film_by_id};

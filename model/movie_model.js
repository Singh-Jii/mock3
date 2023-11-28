const mongo = require('mongoose');


const film_schema = new mongo.Schema({


  title: String,

  genre: [String],


  releaseYear: Number,


  feedbacks: [{ 
    
    type: mongo.Schema.Types.ObjectId, 
    
    ref: 'Review' 
  
  }],


});


const Film = mongo.model('Movie', film_schema);



module.exports = Film;

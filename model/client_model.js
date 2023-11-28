const mongo = require('mongoose');


const client_schema = new mongo.Schema({


  clientname: String,


  email: String,

  password: String,


  watchedMovies: [{ 


    type: mongo.Schema.Types.ObjectId, 
    
    ref: 'Movie' 
  
  }],


  feedbacks: [{ 
    
    type: mongo.Schema.Types.ObjectId, 
    
    ref: 'Review' 
  
  }],


});


const Client = mongo.model('User', client_schema);


module.exports = Client;

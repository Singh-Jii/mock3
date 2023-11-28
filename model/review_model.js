const mongo = require('mongoose');


const feedback_schema = new mongo.Schema({


  client: { 
    
    type: mongo.Schema.Types.ObjectId, 
    
    
    ref: 'User' 
  
  },


  film: { 
    
    type: mongo.Schema.Types.ObjectId, 
    
    ref: 'Movie' 
  
  },


  rating: Number,

  comment: String,


  timestamp: Date,


});


const Feedback = mongo.model('Review', feedback_schema);



module.exports = Feedback;

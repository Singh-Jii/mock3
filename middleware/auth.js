const jot = require('../jot');


const Client = require('../model/client_model');


const auth_Client = async (request, response, next) => {


  try {


    const token = request.header('Authorization');


    if (!token) {


      return response.status(401).json({ msg: 'error' });

    }


    const my_dt = jot.check_token(token);

    if (!my_dt) {

      return response.status(401).json({ msg: 'error' });


    }

    const client = await Client.findById(my_dt.client_id);


    if (!client) {


      return response.status(404).json({ msg: 'error' });


    }


    request.client = client;

    next();


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};


module.exports = {auth_Client};

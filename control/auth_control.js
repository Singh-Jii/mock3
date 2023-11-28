const Client = require('../model/client_model');


const jot = require('../jot');

const bc = require('bcrypt');


const reg_Client = async (request, response) => {


  try {

    const { clientname, email, password } = request.body;

    const availableClient = await Client.findOne({ email });


    if (availableClient) {

      return response.status(400).json({ msg: 'clients are available' });

    }

    const privacy = await bc.hash(password, 8);

    const newClient = new Client({clientname,email,password: privacy});

    await newClient.save();

    response.status(201).json({ msg: 'client registration completed.' });


  } 
  
  catch (er) {


    console.log('error', er);

    response.status(500).json({ msg: 'error' });


  }


};


const loginClient = async (request, response) => {


  try {


    const { email, password } = request.body;

    const client = await Client.findOne({ email });


    if (!client) {


      return response.status(401).json({ msg: 'error' });


    }

    const my_combine_psswrd = await bc.compare(password, client.password);


    if (!my_combine_psswrd) {


      return response.status(401).json({ msg: 'error' });


    }

    const token = jot.create_token(client._id);

    response.status(200).json({ token });


  } 
  
  
  catch (er) {


    console.log('error', er);


    response.status(500).json({ msg: 'error' });


  }


};


module.exports = {reg_Client,loginClient};

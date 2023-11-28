const my_jsonweb = require('jsonwebtoken');


const conc = require('../config');

const create_token = (client_id) => {


  try {


    const token = my_jsonweb.sign({ client_id }, conc.jot_secret, { expiresIn: '2h' });

    return token;


  } 
  
  
  catch (er) {


    console.log('error', er);


    return null;


  }


};



const check_token = (token) => {


  try {

    const my_dt = my_jsonweb.verify(token, conc.jot_secret);

    return my_dt;


  } 
  
  catch (er) {


    console.log('error', er);

    return null;


  }


};


module.exports = {create_token,check_token};

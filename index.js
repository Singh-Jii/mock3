const exp = require('express');


const mongo = require('mongoose');

const conc = require('./config');


const application = exp();

application.use(exp.json()); 


application.use(exp.urlencoded({ extended: true })); 


application.use('/api/auth', require('./route/auth_route'));

application.use('/api/movies', require('./route/movie_route'));


application.use('/api/reviews', require('./route/review_route'));



application.use((request, response, next) => {


  response.status(404).json({ msg: 'error' });


});



application.use((er, request, response, next) => {


  console.log(er.stack);

  response.status(500).json({ msg: 'error' });


});



mongo.connect(conc.mongo_link, { 
  
  useNewUrlParser: true, 
  
  useUnifiedTopology: true 


})


  .then(() => {


    console.log('mongodb connected');


    application.listen(conc.my_port, () => {


      console.log(`${conc.my_port}`);

    });


  })


  .catch((er) => console.log('error', er));

  

module.exports = application; 

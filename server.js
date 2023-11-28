const application = require('./index');


const my_port = process.env.my_port || 8000;

application.listen(my_port, () => {


  console.log(`${my_port}`);

  
});

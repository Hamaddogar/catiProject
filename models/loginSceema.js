const mongoose = require('mongoose')
 const Scheema = mongoose.Schema;


  const userScheema= new Scheema({
  email :{type:String},
  password: {type:String}

  })
  const LoginSceema= mongoose.model('LoginUser',userScheema);
  module.exports=LoginSceema
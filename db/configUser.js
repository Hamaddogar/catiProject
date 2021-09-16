 const mongoose  = require('mongoose')

  const db_url= process.env.DB_URL ||'mongodb+srv://admin:admin@cluster0.se9hv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

   mongoose.connect(db_url,{useNewUrlParser:true})
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,'DB CONNECTION Error'))
    db.once('open',()=>{console.log('Successfully connected To DB')})
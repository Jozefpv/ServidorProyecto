const mongoose = require('mongoose')
const dotenv= require('dotenv').config() 

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('open', () =>{ 
    console.log('Basa de datos conectada')
})

mongoose.connection.on('error', (err) =>{ 
    console.log(err)
})


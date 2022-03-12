const mongoose = require('mongoose');
const config = require('./config');
require('../models/User');
require('../models/Post');
require('../models/Player');


module.exports = async (app) => {
    try{
        await mongoose.connect(config.dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('Database is connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database Error: ', err);
        }); 
    }catch(err){
        console.error('Error connection to database');
        process.exit(1);
    }
}
/* -----------------------------------------

    DATABASE CONFIGURATION

--------------------------------------------*/

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/test';

const connect = async () => {
    try{
        await mongoose.connect(mongoURI, {
            /*
                The following were throwing as deprications on my system
                -- caused errors with connection
                -- removed from configuration
                -- successful connection

            // useNewUrlParser: true,
            // useUnifiedTopology: true,

            */

            serverSelectionTimeoutMS: 15000, //<-- increasing timeout for postman 

        });

        console.log('--- CONNECTED TO MongoDB.');

    }catch (err) {
        
        console.error('-- CONNECTION FAILED.', err.message);
    }
};

module.exports = connect; //<--- use in modules

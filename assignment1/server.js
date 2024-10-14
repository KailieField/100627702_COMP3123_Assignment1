/* -----------------------------------------

    SERVER CONFIGURATIONS
    
--------------------------------------------*/
require('dotenv').config(); //<-- safeguards API key in .env, KEY=VALUE

const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/db'); //<--- mongoDb connection
const userRoute = require('./api/v1/users');
const employeeRoute = require('./api/v1/employee');


const app = express();


// middleware
app.use(express.json());
app.use(bodyParser.json());

// connect to mongodb
connect();

// routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/employee', employeeRoute);

// start server
const PORT = 3000; 
app.listen(PORT, () => {
    // http://localhost:3000/
    console.log(`--- SERVER RUNNING ON: ${PORT}`);
});

module.exports = app; //<--- setting up to export to vercel


/**
 *      I would have preferred to use :5000 as that is preferred for Node.js applications
 *          -- was getting occupation errors 
 *          -- switched to :3000
 *          -- continued to get occupation errors, but with less frequency
 *          -- switching to :3000 gave me less timout issues in postman though
 */
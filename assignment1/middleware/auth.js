/* -----------------------------------------

   AUTHORIZATION MIDDLEWARE
   
--------------------------------------------*/

const jsonWebToken = require('jsonwebtoken'); //<-- JWT library

// const employeeValidation = require('../validators/employeeValidation');
// const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {

    const header = req.headers['authorization']; //<---postman header

    if(!header) {
        return res.status(401).send({ message : '--- HEADER MISSING.' });
    }

    const headerParts = header.split(' ');
    if(headerParts.length !== 2 || headerParts[0] !== 'Bearer') {
        return res.status(401).send({ message: '--- INVALID FORMAT.' });
    }

    jsonWebToken.verify(headerParts[1], process.env.JWT_SCRET, (err, decodedData) => {
        if(err) {
            return res.status(403).send({ message: '--- FAILED TO AUTHORIZE.' });
        }

        req.userId = decodedData.id;
        next();
        
    });
};


/* -----------------------------------------

   USER CONTROLLER
   
--------------------------------------------*/
/*
        Attempted to meet optional deliverable
        --  able to do it for users
        -- became too cumbersome for employees
        -- too unfamilliar with Bearer <token>
        -- removed from employeesController
        -- kept here as there was one successful run

*/

const User = require('../models/Users'); //<-- model
const bcrypt = require('bcrypt'); //<-- library for hashing
const jsonWebToken = require('jsonwebtoken'); //<-- JWT library
const { validationResult } = require('express-validator'); //<-- validator


// SIGNUP
exports.signup = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try{
        // checking if exists
        const existingUser = await User.findOne({ email });

        if(existingUser) {

            return res.status(400).json({ message: '--- USER EXISTS.' });
        }

        // hashing
        const hashedpw = await bcrypt.hash(password, 10);
        const createUser = new User({ username, email, password: hashedpw });
        await createUser.save();

        // postman header -- this indicates to me that something isnt entirely right in my code
        // -- should be able to be run without this by default through express
        res.setHeader('Content-Type', 'application/json');

        res.status(201).json({ message: '--- USER CREATED.', userId: createUser._id });
    
    }catch (err) {

        console.error('--- ERROR CREATING USER: ', err.message);

        res.status(500).json({ message: '--- ERROR CREATING USER.', error: err.message });
    }
};

//LOGIN
exports.login = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try{
        // option username or email as per deliverables
        const query = username ? { username } : email ? { email } : null;

        if(!query) {

            return res.status(400).json({ message: '-- PROVIDE USERNAME OR EMAIL.'});
        }

        const user = await User.findOne(query);
        console.log(user); // debugging

        // passsword
        if(!user || !(await bcrypt.compare(password, user.password))) {

            return res.status(401).json({ message: '--- INVALID CREDENTIALS.' });
        }

        // creating token
        const token = jsonWebToken.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'}); 
        res.status(200).json({ message: '--- LOGGED IN.', jwt_token: token});

    }catch (err) {

        console.error('--- ERROR LOGGING IN: ', err); //debugging
        res.status(500).json({ message: '--- ERROR LOGGING IN.' });
        
    }
};

// TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGM0ZjRkYWYzOTVlZTkwYzFiZmI1NyIsImlhdCI6MTcyODg2MTUxMiwiZXhwIjoxNzI4ODY1MTEyfQ.LU_QMyHXXJCHZDE98WVOiLFAWi-eCsyGd7dcrzqg5yw

/* -----------------------------------------

    USER ROUTE CONFIGURATION
    -- API URL: http://localhost:3000/api/v1/users

--------------------------------------------*/

const express = require('express');
const { validationResult } = require('express-validator');
const userController = require('../../controllers/userController');
const userValidation = require('../../validators/userValidation');

const router = express.Router();

// USER SIGNUP 
// http://localhost:3000/api/v1/users/signup
router.post('/signup', userValidation, async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    await userController.signup(req, res);
});

// USER LOGIN 
// http://localhost:3000/api/v1/users/login
router.post('/login', userValidation, async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        
        res.status(400).json({ errors: errors.array() });
    }
    await userController.login(req, res);
})

module.exports = router;

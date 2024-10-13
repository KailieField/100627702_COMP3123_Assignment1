/* -----------------------------------------

    EMPLOYEE ROUTE CONFIGURATIONS
    -- API URL: http://localhost:5000/api/v1/employee

--------------------------------------------*/

const express = require('express');
const employeeValidation = require('../../validators/employeeValidation.js'); 
const employeeController = require('../../controllers/employeeController.js');

// const auth = require('../../middleware/auth');
const { validationResult } = require('express-validator');

const router = express.Router();


// RETRIEVING ALL EMPLOYEES FROM DATABASE
// http://localhost:3000/api/v1/employee/
router.get('/', employeeController.getAllEmployees); 


// CREATING AN EMPLOYEE IN THE DATABASE 
// http://localhost:3000/api/v1/employee/
router.post('/', employeeValidation, async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });
    }
    await employeeController.createEmployee(req, res);
});


// RETRIEVING EMPLOYEE BY ID
// http://localhost:3000/api/v1/employee/:eid
router.get('/:eid', employeeController.getEmployeeId)


// UPDATING EMPLOYEE BY ID
// http://localhost:3000/api/v1/employee/eid
router.put('/:eid', employeeValidation, async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        
        return res.status(400).json({ errors: errors.array() });
    }

    await employeeController.updateEmployee(req, res);
});



// DELETING EMPLOYEE BY ID
// http://localhost:3000/api/v1/employee/:eid
router.delete('/:eid', employeeController.deleteEmployee);

module.exports = router;
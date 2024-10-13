/* -----------------------------------------

   EMPLOYEE VALIDATORS
   
--------------------------------------------*/

const { body } = require('express-validator');

const employeeValidation = [

    body('first_name')
    .notEmpty()
    .withMessage('--- FIRST NAME REQUIRED.'),
    body('last_name')
    .notEmpty()
    .withMessage('--- LAST NAME REQUIRED.'),
    body('email')
    .isEmail()
    .withMessage('--- INVALID EMAIL'),
    body('position')
    .notEmpty()
    .withMessage('--- EMPLOYEE POSITION REQUIRED.'),
    body('salary')
    .isNumeric()
    .withMessage('--- SALARY MUST BE A NUMBER.'),
    body('date_of_joining')
    .isISO8601() //<-- express-validator function for standard date and time
    .withMessage('--- DATE REQUIRED.'),
    body('department')
    .notEmpty()
    .withMessage('--- EMPLOYEE DEPARTMENT REQUIRED.')

];

module.exports = employeeValidation;

// ISO 8601 FORMAT -- international standard for date and time representation
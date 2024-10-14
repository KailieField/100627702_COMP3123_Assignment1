/* -----------------------------------------

   EMPLOYEE CONTROLLER

--------------------------------------------*/

const Employee = require('../models/Employee'); //<-- model
const { validationResult } = require('express-validator'); //<-- validator

exports.getAllEmployees = async (_req, res) => {
    try{
    const employee = await Employee.find();
    res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: '--- ERROR FETCHING.' });
    }
};

exports.createEmployee = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(400).json({ errors: errors.array() });
    }

    try{

        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({ message: '--- EMPLOYEE ADDED TO DATABASE ', employeeId: newEmployee._id });
    } catch (err) {
        res.status(500).json({ message: '--- ERROR CREATING EMPLOYEE.' });
    }
   
};

exports.getEmployeeId = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params.eid);
        if(!employee) {
            return res.status(404).json({ message: '--- EMPLOYEE NOT FOUND IN DATABASE.' });
        }
        res.status(200).json(employee); 
    }catch (err) {
        res.status(500).json({ message: '--- ERROR FETCHING EMPLOYEE.' });
    }
};

exports.updateEmployee = async (req, res) => {
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
        if(!employee) {
            return res.status(404).json({ message: '--- EMPLOYEE NOT FOUND IN DATABASE.' });
        }
        res.status(200).json({ message: '--- DATABASE UPDATED.', employee});
    }catch (err) {
        res.status(500).json({ message: '--- ERROR UPDATING EMPLOYEE.' });
    }
};

exports.deleteEmployee = async (req, res) => {
    const employeeId = req.params.eid;
    console.log(`--- ATTEMPTING TO DELETE: `, employeeId); // debugging

    try{
        const employee = await Employee.findByIdAndDelete(employeeId);
        
        if(!employee) {

            return res.status(404).json({ message: '--- EMPLOYEE NOT FOUND IN DATABASE.' });
        }

        res.status(200).json({ message: '--- EMPLOYEE DELETED.'});

    }catch (error) {

        console.error('--- ERROR DELETING EMPLOYEE. ', error.message); // debugging
        res.status(500).json({ message: '--- ERROR DELETING EMPLOYEE.' });
    }

};
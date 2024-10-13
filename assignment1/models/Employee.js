/* -----------------------------------------

   EMPLOYEE COLLECTION SCHEMA + MODEL
   
--------------------------------------------*/
const mongoose = require('mongoose');

const employeeCollectionSchema = new mongoose.Schema({

 // _id : ObjectId, // <--- unneccessary when using mongoose, produces a unique _id by default
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    salary: { type: String, required: true },
    date_of_joining: { type: Date, required: true },
    department: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }

});

const Employee = mongoose.model('Employee', employeeCollectionSchema);

module.exports = Employee;
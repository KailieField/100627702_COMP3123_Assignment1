/* -----------------------------------------

   USER COLLECTION SCHEMA + MODEL

--------------------------------------------*/

const mongoose = require('mongoose');

const userCollectionSchema = new mongoose.Schema({
    
  //_id : ObjectId, // <--- unneccessary when using mongoose, produces a unique _id by default
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }

});

const User = mongoose.model('User', userCollectionSchema);

module.exports = User;
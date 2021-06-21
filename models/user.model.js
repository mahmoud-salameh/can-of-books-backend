'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./book.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('users', userSchema);


const seedUserData = () => {
    const newUser = new userModel({
        email: 'sanabeljamal97@gmail.com',
        books: [
            { name: 'The lord of the rings' },
            { name: 'Hamlet' },
            { name: ' The Great Gatsby' }
        ]
    });

    console.log(newUser);

    newUser.save();

}

module.exports = userModel;
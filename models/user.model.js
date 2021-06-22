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
        email: 'mahmoud456a@gmail.com',
        books: [
            { 
                name: 'In Search of Lost Time',
                description : 'Swanns Way, the first part of A la recherche de temps perdu, Marcel Prousts seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narr...' ,
                status : 'puplished' 
            },
            {
                 name: 'Hamlet' ,
                 description : 'The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Pri...' ,
                 status : 'puplished'
                },
            { 
                name: 'The Great Gatsby' ,
                description : 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roar...' ,
                status : 'puplished' 
            }
        ]
    });
    console.log(newUser);
    
    newUser.save();
}


module.exports = {
    userModel,
    seedUserData
};

'use strict';

const {userModel} = require('../models/user.model');
// require('dotenv').config();

// const createCat = (request, response) => {
//     // const { catName, userEmail } = request;
//     response.send(" We got the request and we are still working on functionality");
// }

const getBooks = (request, response) => {

    const{ email } = request.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            console.log(user)
            response.json(user)
        }
    });
}

const createbook = (request, response) => {
    

    const {userEmail, bookName} = request.body;

    userModel.findOne({email: userEmail}), (error, userData) => {

        if (error) {
            response.send(error)
        }
        else{
            userData.books.push({ name: bookName })
            userData.save();
            response.json(userData);
        }
    }
}

const updateBook = (request, response) => {
    const bookIndex = request.params.book_inx;
    const { userEmail, bookName } = request.body;

        userModel.findOne({email:userEmail}, (error, userData) =>{
        if(error){
            response.send(error)
        }else{
            userData.book.splice(bookIndex, 1 , {name:bookName})
            userData.save();
            response.send(userData)
        }
    });
}

const deleteBook = (request , response) =>{
    const bookIndex = request.params.book_inx;
    const {email} =request.query;

    userModel.findOne({ email: email} , (error, userData) => {
        if (error) {
            response.send(error)
        }
        else {
            userData.book.splice(bookIndex, 1)
            userData.save();
            response.send(userData)
        }
    })

}

module.exports = {
    getBooks,
    createbook,
    updateBook,
    deleteBook
};
'use strict';

const { userModel } = require('../models/user.model');

const getBooks = (request, response) => {
    console.log(request.query);
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {

            console.log(user)
            response.send(user)
        }
    });
}

const createbook = (request, response) => {
    console.log(request.body);


    const { userEmail, bookName, description, status  } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {

        if (error) {
            response.send(error)
        }
        else {
            console.log(userData);
            userData.books.push({ name: bookName , description, status })
            userData.save();
            response.status(200).send(userData);
        }
    })
}

const updateBook = (request, response) => {
    const bookIndex = request.params.book_idx;
    const { userEmail, bookName, description, status } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1, { name: bookName, description, status })
            userData.save();
            response.send(userData)
        }
    });
}

const deleteBook = (request, response) => {
    const bookIndex = request.params.book_idx;
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        }
        else {
            userData.books.splice(bookIndex, 1)
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
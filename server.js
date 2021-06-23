const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const {
    getBooks,
    createbook,
    updateBook,
    deleteBook
} = require('./controller/book.controller');
const cors = require('cors');


const PORT = process.env.PORT;
app.use(cors()) 
const { seedUserData } = require('./models/user.model')
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`,
{ useNewUrlParser: true, useUnifiedTopology: true }
);

seedUserData();
app.get('/',(req, res) => {

    res.send('Hello World') 
     })


app.get('/books', getBooks)

app.post('/book', createbook);

app.put('/book/:book_idx', updateBook);

app.delete('/book/:book_idx', deleteBook)

app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`);
});
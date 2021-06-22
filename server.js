const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks
} = require('./controller/book.controller');
const cors = require('cors');


const { seedUserData } = require('./models/user.model')
const PORT = process.env.PORT;
app.use(cors()) 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myFavoritebooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);
seedUserData();

app.get('/',(req, res) => {

    res.send('Hello World') 
     })


app.get('/books', getBooks)

app.post('/book', createbook);

app.put('/book/:book_idx', updatebook);

app.delete('/book/:book_idx', deletebook)

app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`);
});
'use strict';

const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    name: { type: String }
 
});


module.exports = bookSchema;
const mongoose = require('mongoose')


const booksSchema =mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String,
    Pages: Number,
    Publisher: String
})

module.exports=booksSchema
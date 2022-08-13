const mongoose = require('mongoose')


const BooksLibrary =mongoose.model("BooksLibrary",mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String,
    Pages: Number,
    Publisher: String
}))

module.exports=BooksLibrary
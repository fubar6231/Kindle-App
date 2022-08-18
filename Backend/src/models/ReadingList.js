const mongoose = require('mongoose')


const ReadingList =mongoose.model("ReadingList",mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String,
    Pages: Number,
    Read: Number,
    Publisher: String
}))

module.exports=ReadingList
const mongoose = require('mongoose')



const ReadingList =mongoose.model("ReadingList",mongoose.Schema({
    Read:{type:Number,default:0},
    bookDetails:{}
}))

module.exports=ReadingList
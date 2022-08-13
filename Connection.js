const mongoose = require('mongoose')


const connection=()=>{mongoose.connect('mongodb://localhost:27017/Books').then(() => console.log("connected"))}

module.exports = connection
const mongoose = require('mongoose')
const express = require('express')
const app = express()


const db = require('./src/config/db.config')
const BooksRouter = require("./src/routes/BooksRoutes")




db.BooksLibrary = require('./src/models/Books')
app.use(express.json())

app.listen(process.env.PORT)

db.connectToDatabase().then(()=>{
    db.BooksLibrary()
})

app.use('/api/books',BooksRouter)


//
//
// //gets all the books
// app.get('/api/books', async (req, res) => {
//     await connection()
//     BooksLib.find().then(allBooks => res.json(allBooks))
// })
//
// //gets you that book by url params
// app.get('/api/books/:Title', async (req, res) => {
//     await connection()
//     const {Title} = req.params
//     const Book = await BooksLib.findOne({_id: Title})
//     res.json(Book)
// })
//
// //gets you books by query
// // app.get('/api/books', async (req, res) => {
// //     await connection()
// //     let book = await BooksLib.find({Author:req.query.Author.split(",")})
// //     res.json(book)
// // })
//
// app.post('/api/books',async (req,res)=>{
//     await connection()
//     const newBook= await BooksLib.create(req.body)
//     res.json(newBook)
// })
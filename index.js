const mongoose = require('mongoose')
const express = require('express')
const app = express()


const db = require('./src/config/db.config')
const BooksRouter = require("./src/routes/BooksRoutes")

app.use(express.json())
db.BooksLibrary = require('./src/models/Books')
app.listen(process.env.PORT)
db.connectToDatabase()
app.use('/api/books', BooksRouter)

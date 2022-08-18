const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./src/config/db.config')
const BooksRouter = require("./src/routes/BooksRoutes")
const ReadingListRouter = require("./src/routes/ReadingListRouter")


db.BooksLibrary = require('./src/models/Books')
db.ReadingList = require('./src/models/ReadingList')

app.use(cors())
app.use(express.json())
app.listen(process.env.PORT)
db.connectToDatabase()


app.use('/api/books', BooksRouter)
app.use('/api/books/readingList', ReadingListRouter)

const express = require('express')
const router = express.Router()

const booksController = require('../controller/books')


router.get("/",booksController.get )

module.exports = router


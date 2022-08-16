const express = require('express')
const router = express.Router()

const booksController = require('../controller/BooksController')


router.get("/", booksController.get)
router.post("/", booksController.create)
router.put("/:id", booksController.update)
router.get("/:id", booksController.findById)

module.exports = router


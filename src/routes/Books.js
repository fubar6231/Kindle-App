const express = require('express')
const router = express.Router()

const db = require('../config/db.config')

router.get("/",async (req, res)=>{
    const allBooks = await db.BooksLibrary.find({Genre: "signal_processing"})
    res.json(allBooks)})
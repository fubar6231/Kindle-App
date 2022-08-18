const express = require('express')
const router = express.Router();
const ReadingListController = require('../controller/ReadingListController')

router.get("/", ReadingListController.get)
router.post("/", ReadingListController.create)
router.put("/:id", ReadingListController.update)
router.delete("/:id", ReadingListController.delete)

module.exports = router

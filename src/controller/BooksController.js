const db = require('../config/db.config')

module.exports.get = async (req, res) => {
    const allBooks = await db.BooksLibrary.find()
    res.json(allBooks)
}

module.exports.create = async (req, res) => {
    if (!req.body.Title) {
        res.status(400).json({message: "Title Content can not be empty!"})
    }
    if (!req.body.Author) {
        res.status(400).json({message: "Author Content can not be empty!"})
    }
    if (!req.body.Genre) {
        res.status(400).json({message: "Genre Content can not be empty!"})
    }
    if (!req.body.Pages) {
        res.status(400).json({message: "Pages Content can not be empty!"})
    }
    if (!req.body.Publisher) {
        res.status(400).json({message: "Publisher Content can not be empty!"})
    }
    const newBook = new BooksLibrary({
        Title: req.body.Title,
        Author: req.body.Author,
        Genre: req.body.Genre,
        Pages: req.body.Pages,
        Publisher: req.body.Publisher
    })

    newBook.save().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({
            message:
                err.message || "Some error occurred while creating the Books."
        })
    })
}

module.exports.findByTitle = async (req, res) => {
    try {
        const {Title} = req.params
        let condition = Title ? {Title: {$regex: new RegExp(Title)}} : {}
        let result = BooksLibrary.find(condition)
        res.json(result)
    } catch (err) {
        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving Books."
        })
    }

}

module.exports.findById = (req, res) => {
    try {
        const {id} = req.params;
        const data = BooksLibrary.findOne(id)
        if (!data)
            res.status(404).json({message: "Not found Book with id " + id});
        else res.json(data)
    } catch (err) {
        res
            .status(500)
            .json({message: "Error retrieving Book with id=" + id});
    }
}

module.exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;

    try {
        const data = BooksLibrary.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        if (!data) {
            res.status(404).json({
                message: `Cannot update Book with id=${id}. Maybe Book was not found!`
            });
        } else res.json({message: "Book was updated successfully."});
    } catch (err) {
        res.status(500).json({
            message: "Error updating Book with id=" + id
        });
    }
    ;
};

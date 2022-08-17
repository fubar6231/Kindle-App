const db = require('../config/db.config')

module.exports.get = async (req, res, next) => {
    if (req.query.Title) {
        try {
            const {Title} = req.query
            let condition = Title ? {Title: {$regex: new RegExp(Title)}} : {}
            let result = await db.BooksLibrary.find(condition)
            res.json(result)
        } catch (err) {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving Books."
            })
        }
    } else if (req.query.Author) {
        try {
            const {Author} = req.query
            let condition = Author ? {Author: {$regex: new RegExp(Author)}} : {}
            let result = await db.BooksLibrary.find(condition)
            res.json(result)
        } catch (err) {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving Books."
            })
        }
    } else if (req.query.Genre) {
        try {
            const {Genre} = req.query
            let condition = Genre ? {Author: {$regex: new RegExp(Genre)}} : {}
            let result = await db.BooksLibrary.find(condition)
            res.json(result)
        } catch (err) {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving Books."
            })
        }
    } else if (req.query.Publisher) {
        try {
            const {Publisher} = req.query
            let condition = Publisher ? {Author: {$regex: new RegExp(Publisher)}} : {}
            let result = await db.BooksLibrary.find(condition)
            res.json(result)
        } catch (err) {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving Books."
            })
        }
    } else {
        const allBooks = await db.BooksLibrary.find()
        res.json(allBooks)
    }
}

module.exports.create = async (req, res, next) => {
    if (!req.body.Title) {
        res.status(400).json({message: "Title Content can not be empty!"})
    } else if (!req.body.Author) {
        res.status(400).json({message: "Author Content can not be empty!"})
    } else if (!req.body.Genre) {
        res.status(400).json({message: "Genre Content can not be empty!"})
    } else if (!req.body.Pages) {
        res.status(400).json({message: "Pages Content can not be empty!"})
    } else if (!req.body.Publisher) {
        res.status(400).json({message: "Publisher Content can not be empty!"})
    }
    const newBook = new db.BooksLibrary({
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


module.exports.findById = async (req, res, next) => {
    const {id} = req.params
    try {
        const data = await db.BooksLibrary.findOne({_id: id})
        if (!data)
            res.status(404).json({message: "Not found Book with id " + id});
        else res.json(data)
    } catch (err) {
        res
            .status(500)
            .json({message: "Error retrieving Book with id=" + id});
    }
}

module.exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length < 1) {
        return res.status(400).json({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    try {
        const data = await db.BooksLibrary.findByIdAndUpdate({_id: id}, req.body, {useFindAndModify: false})
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
};

module.exports.delete = async (req, res) => {
    const {id} = req.params
    try {

        const data = await db.BooksLibrary.findByIdAndDelete({_id:id})
        if (!data) {
            res.status(404).send({
                message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
            });
        } else {
            res.send({
                message: "Book was deleted successfully!"
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Book with id=" + id
        })
    }
}

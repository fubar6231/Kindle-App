const db = require('../config/db.config')

module.exports.get = async (req, res, next) => {
        const allBooks = await db.ReadingList.find()
        res.json(allBooks)
}

module.exports.create = async (req, res, next) => {
    console.log(req.body)
    const newBookInList = new db.ReadingList({
        read:req.body.read,
        bookDetails:req.body.bookDetails
    })
    newBookInList.save().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({
            message:
                err.message || "Some error occurred while adding the Books."
        })
    })
}



module.exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length < 1) {
        return res.status(400).json({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    try {
        const data = await db.ReadingList.findByIdAndUpdate({_id: id}, req.body, {useFindAndModify: false})
        if (!data) {
            res.status(404).json({
                message: `Cannot update Book. Maybe Book was not found!`
            });
        } else res.json({message: "Book was updated successfully."});
    } catch (err) {
        res.status(500).json({
            message: "Error updating Book"
        });
    }
};

module.exports.delete = async (req, res) => {
    const {id} = req.params
    try {

        const data = await db.ReadingList.findByIdAndDelete({_id:id})
        if (!data) {
            res.status(404).send({
                message: `Cannot remove Book with id=${id}. Maybe Book was not found!`
            });
        } else {
            res.send({
                message: "Book was remove successfully!"
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not remove Book with id=" + id
        })
    }
}

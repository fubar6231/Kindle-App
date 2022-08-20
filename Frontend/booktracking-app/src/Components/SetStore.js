const axios = require("axios")

const setStore = async () => {
    const Books = await axios.get('http://localhost:5000/api/books').then((res) => res.data)
    const List = await axios.get("http://localhost:5000/api/readingList").then((res) => res.data)
    const modifiedBooks = []
    if(List.length>0){
        Books.map(object => {
            let updatedObject;
            List.map(obj => {
                if (obj.bookDetails._id === object._id) {
                    updatedObject = {...object, "Reading": true}
                } else {
                    updatedObject = {...object, "Reading": false}
                }
            })
            modifiedBooks.push(updatedObject)
        })
        return modifiedBooks
    }
    else {
        return Books
    }
}

module.exports = setStore
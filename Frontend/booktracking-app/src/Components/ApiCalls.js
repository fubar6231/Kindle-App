import axios from "axios";

export function GetBooks(){
    return axios.get('http://localhost:5000/api/books')
}

export function CreateBook(data){
    return axios.post('http://localhost:5000/api/books',data)
}

export function DeleteBook(id){
    return axios.delete(`http://localhost:5000/api/books/${id}`)
}
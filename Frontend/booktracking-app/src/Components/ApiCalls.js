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

export function GetReadingList(){
    return axios.get("http://localhost:5000/api/readingList")
}

export function AddToReadingList(data){
    return axios.post("http://localhost:5000/api/readingList",data)
}

export function UpdateBookPages(id,data){
    return axios.put(`http://localhost:5000/api/readingList/${id}`,data)
}

export function RemoveFromReadingList(id){
    return axios.delete(`http://localhost:5000/api/readingList/${id}`)
}
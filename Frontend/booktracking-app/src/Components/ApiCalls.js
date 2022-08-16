import axios from "axios";

export function GetBooks(){
    return axios.get('http://localhost:5000/api/books')
}
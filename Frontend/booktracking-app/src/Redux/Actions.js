import {ActionTypes} from "./ActionTypes";

export const GetBooks = (Books)=>{
    return {
        type:ActionTypes.getBooks,
        payload:Books
    }
}

export const CreateBook = (Books)=>{
    return {
        type:ActionTypes.createBook,
        payload:Books
    }
}

export const DeleteBook=(Books)=>{
    return{
        type:ActionTypes.deleteBook,
        payload:Books
    }
}
import {ActionTypes} from "./ActionTypes";

export const GetBooks = (Books)=>{
    return {
        type:ActionTypes.getBooks,
        payload:Books
    }
}

export const CreateBooks = (Books)=>{
    return {
        type:ActionTypes.createBook,
        payload:Books
    }
}
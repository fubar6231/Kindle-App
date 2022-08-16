import {ActionTypes} from "./ActionTypes";

export const GetBooks = (Books)=>{
    return {
        type:ActionTypes.getBooks,
        payload:Books
    }
}
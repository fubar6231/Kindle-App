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

export const GetReadingList=(ReadingList)=>{
    return{
        type:ActionTypes.getReadingList,
        payload:ReadingList
    }
}

export const AddToReadingList=(UpdatedList)=>{
    return{
        type:ActionTypes.addToReadingList,
        payload:UpdatedList
    }
}

export const updateReadPages=(ReadingList)=>{
    return{
        type:ActionTypes.getReadingList,
        payload:ReadingList
    }
}

export const updateBooksStatus =(Books)=>{
    return{
        type:ActionTypes.updateBooksStatus,
        payload:Books
    }
}
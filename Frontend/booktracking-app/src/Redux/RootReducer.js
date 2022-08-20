import {combineReducers} from "redux";

import {BooksReducer} from "./BooksReducer";
import {ReadingListReducer} from "./ReadingListReducer";

export const RootReducer = combineReducers({BooksStore:BooksReducer, ReadingListStore:ReadingListReducer})


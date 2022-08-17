import {ActionTypes} from "./ActionTypes";

const initialState = {Books: []}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.getBooks:
            return {...state, Books: action.payload}
        case(ActionTypes.createBook):
            return {...state,Books: [action.payload,...state.Books]}

        default:
            return state
    }
}
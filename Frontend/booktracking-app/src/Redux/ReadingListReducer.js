import {ActionTypes} from "./ActionTypes";

const initialState = {ReadingList: []}

export const ReadingListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.getReadingList:
            return {...state, ReadingList: action.payload}
        case(ActionTypes.addToReadingList):
            return {...state,ReadingList: [action.payload,...state.Books]}
        case (ActionTypes.updateReadPages):
            return {...state,ReadingList:action.payload}
        default:
            return state
    }
}
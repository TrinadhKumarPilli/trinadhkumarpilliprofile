import { ActionTypes } from "./ReducerActionTypes/ActionTypes"

export const initState = {
    increment: 0,
    decrement: 0
}

export default function LoginReducer (state = initState, action) {
    switch(action.type){
        case ActionTypes.INCREMENT:
            return Object.assign({}, state, {increment: action.payload})
        case ActionTypes.DECREMENT:
            return Object.assign({}, state, {decrement: action.payload})
        default:
            return state
    }
}
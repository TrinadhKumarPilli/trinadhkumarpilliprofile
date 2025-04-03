import { ActionTypes } from "../ReducerActionTypes/ActionTypes"

const onClickIncrement = (value) =>{
    return{
        type: ActionTypes.INCREMENT,
        payload: value
    }
}

const onClickDecrement= (value) =>{
    return{
        type: ActionTypes.DECREMENT,
        payload: value
    }
}

export { onClickDecrement, onClickIncrement};
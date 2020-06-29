import {CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, DELETE_TODO_ITEM} from './actionTypes'
const defaultState = {
    inputValue:  "some text ",
    list: [
        'buy cat food',
        'pay gas bill'
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === ADD_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, state.inputValue]
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        
        return newState
    }
    return state
}
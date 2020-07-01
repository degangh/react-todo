import {CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getInputAddAction = () => ({
    type: ADD_INPUT_VALUE
})

export const getDeleteItemAction = (value) => ({
    type: DELETE_TODO_ITEM,
    value
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todo').then((res)=>{
            console.log(res)
            const action = initListAction(res.data)
            dispatch(action)
        })
    }
}
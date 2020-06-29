import {CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, DELETE_TODO_ITEM} from './actionTypes'

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
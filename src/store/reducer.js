const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    
    if(action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === 'init_item_list') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    if(action.type === 'delete_item') {
        console.log(action.data)
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.data, 1)
        return newState
    }
    
    return state
}
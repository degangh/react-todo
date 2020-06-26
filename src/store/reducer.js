const defaultState = {
    inputValue:  "some text ",
    list: [
        'buy cat food',
        'pay gas bill'
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'add_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, action.value]
        newState.inputValue = ''
        return newState
    }
    return state
}
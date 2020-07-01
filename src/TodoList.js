import React, {Component} from 'react'

import store from './store/index'
import TodoListUI from './TodoListUI'
import 'antd/dist/antd.css'
import { getDeleteItemAction, getInputChangeAction, getInputAddAction, getTodoList } from './store/actionCreator'


class TodoList extends Component {
    
    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
    }
    render() {
        const {inputValue, list} = store.getState()
        store.subscribe(this.handleStoreChange)
        return (
        
            <TodoListUI 
                inputValue = {inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list = {list}
                handleItemDelete={this.handleItemDelete}
            />
        
        )
    }

    handleInputChange = (e) =>{
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    
    handleBtnClick = () => {
        
        const action = getInputAddAction()

        store.dispatch(action)
        
    }
    handleStoreChange = () => {
        this.setState(store.getState())
    }
    handleItemDelete = (index) => {
        const action = getDeleteItemAction(index)

        store.dispatch(action)
    }
    
}

export default TodoList
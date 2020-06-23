import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
    
    state = {
        inputValue : '',
        list: [
            'buy cat food',
            'clean the house'
        ]
    }
    
    render() {
        const {inputValue, list} = this.state
        return (
        <Fragment>
            <div>
                <label htmlFor="todo">Todo</label>
                <input 
                    id="todo"
                    value={inputValue}
                    className="input"
                    onChange={this.handleInputChange}
                />
                <button
                    onClick={this.handleBtnClick}
                >
                    Save
                </button>
            </div>
            
            <ul>
                {
                    this.getItemList(list)
                }
                
            </ul>
        </Fragment>    
        
        )
    }

    handleInputChange = (e) =>{
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick = () => {
        const {inputValue} = this.state
        this.setState({
            list: [...this.state.list, inputValue],
            inputValue: ''
        })
    }
    handleItemClick = (index) => {
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
    getItemList(list) {
        return list.map((item, index) => {
            return (
            
            <TodoItem 
                item={item} 
                index={index} 
                key={index}
                deleteItem={this.handleItemClick}
            />
            
            )
        })
    }
}

export default TodoList
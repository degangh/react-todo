import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import {Input, Button, List} from 'antd'
import store from './store/index'
import 'antd/dist/antd.css'

class TodoList extends Component {
    
    
    render() {
        
        const {inputValue, list} = store.getState()
        store.subscribe(this.handleStoreChange)
        return (
        
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                <Input 
                    placeholder = "Todo"
                    style={{width: '300px',marginRight: '10px'}}
                    value={inputValue}
                    className="input"
                    onChange={this.handleInputChange}

                />
                <Button
                    onClick={this.handleBtnClick}
                    type="primary"
                >
                    Save
                </Button>
                </div>
            
            
            <List 
                style={{width:'300px', marginTop: '10px'}}
                bordered
                dataSource = {list}
                renderItem = {item => (<List.Item>{item}</List.Item>)}
            />
            </div>
        
        )
    }

    handleInputChange = (e) =>{
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
    
    handleBtnClick = () => {
        const {inputValue} = store.getState()
        const action = {
            type: 'add_input_value',
            value: inputValue
        }

        store.dispatch(action)
        
        
    }
    handleStoreChange = () => {
        this.setState(store.getState())
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
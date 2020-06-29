import React, {Component} from 'react'
import {Input, Button, List} from 'antd'
import store from './store/index'
import 'antd/dist/antd.css'
import { getDeleteItemAction, getInputChangeAction, getInputAddAction } from './store/actionCreator'

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
                renderItem = {(item,index) => (<List.Item onClick={()=>{this.handleItemDelete(index)}}>{item}</List.Item>)}
            />
            </div>
        
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
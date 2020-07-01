import React from 'react'
import {Input, Button, List} from 'antd'


const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
        <Input 
            placeholder = "Todo"
            style={{width: '300px',marginRight: '10px'}}
            value={props.inputValue}
            className="input"
            onChange={props.handleInputChange}

        />
        <Button
            onClick={props.handleBtnClick}
            type="primary"
        >
            Save
        </Button>
        </div>
    
    
    <List 
        style={{width:'300px', marginTop: '10px'}}
        bordered
        dataSource = {props.list}
        renderItem = {(item,index) => (<List.Item onClick={(index)=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
    />
    </div>
        )
}


export default TodoListUI
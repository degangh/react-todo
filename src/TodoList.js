import React, {Component} from 'react'
import {Input, Button, List} from 'antd'
import {connect} from 'react-redux'
import axios from 'axios'

import 'antd/dist/antd.css'


class TodoList extends Component
{
    componentDidMount() {
        this.props.initList()
    }
    
    render () {
        const {inputValue, list, changeInputValue,handleClick, handleDelete} = this.props
        return (
            <div  style={{margin: '20px'}}>
                <div>
                <Input 
                    value={inputValue}
                    onChange={changeInputValue}
                    placeholder = "Todo"
                    style={{width: '300px',marginRight: '10px'}}
                />
                <Button
                    onClick={handleClick}
                >
                    Save
                </Button>
                </div>
                
                <List 
                style={{width:'300px', marginTop: '10px'}}
                bordered
                dataSource = {list}
        renderItem = {(item,index) => (<List.Item  onClick={()=>handleDelete(index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue (e) {
            const action = {
                type:'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        }, 
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        initList() {
            axios.get('/api/todo').then((res)=>{
                console.log(res)
                const action = {
                    type: 'init_item_list',
                    data: res.data
                }
                dispatch(action)
            })
            
        },

        handleDelete: (index) =>{
            console.log(index)
            const action = {
                type: 'delete_item',
                data: index
            }
            dispatch(action)
        }
    }
        

     
    
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
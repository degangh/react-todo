import React, {Component} from 'react'
import { ConfigProvider } from 'antd';
import store from './store'
import {connect} from 'react-redux'
const TodoList = (props) => {
    const {inputValue, list, changeInputValue,handleClick,handleDelete} = props
    return (
        <div>
            <div>
            <input 
                value={inputValue}
                onChange={changeInputValue}
            />
            <button
                onClick={handleClick}
            >
                Save
            </button>
            </div>
            <ul>
                {list.map((item) => {
                    return <li onClick={handleDelete}>{item}</li>
                })}
            </ul>
        </div>
    )
        
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
        handleDelete(index) {

        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
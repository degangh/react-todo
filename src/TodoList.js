import React, {Component, Fragment} from 'react'

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
                
                <input 
                    value={inputValue}
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
                    list.map((item, index) => {
                        return <li 
                                    key={index}
                                    
                                >
                                {item}
                                <button onClick={this.handleItemClick(index)}></button>
                                </li>
                    })
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
        console.log(index)
    }
}

export default TodoList
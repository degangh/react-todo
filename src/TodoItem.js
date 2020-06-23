import React, {Component} from 'react'

class TodoItem extends Component {
    
    render() {
        return <div onClick={() => {this.handleClick(this.props.index)}}>{this.props.item}</div>
    }

    handleClick = (index) => {
        this.props.deleteItem(index)
    }
}

export default TodoItem
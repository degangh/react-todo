import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
class TodoItem extends Component {
    
    

    render() {
        console.log('child rendered')
        return <div onClick={() => {this.handleClick(this.props.index)}}>- {this.props.item}</div>
    }

    /**
     *
     *  if parent component is updated, the child component will be updated as well by default
     *  use following lifecycle method to avoid unnecessary rendering, therefore improve the performance
     */
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.content === this.props.content) {
            return false
        } else return true
    }

    /**
     * request remote RESTful API in componentDidMount() lifecycle method,
     * this method is only executed when the component is mounted
     */
    componentDidMount(){
        
    }

    handleClick = (index) => {
        this.props.deleteItem(index)
    }
}

TodoItem.propTypes = {
    item: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    item: 'default item'
}

export default TodoItem
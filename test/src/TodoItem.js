import React from 'react'

class TodoItem extends React.Component {
    constructor(props){
        super(props)

        this.deleteItem = this.deleteItem.bind(this)
    }
    deleteItem(){
        this.props.deleteItem(this.props.index)
    }
    render() {
        return (
            <div onClick={this.deleteItem}> {this.props.content} </div>
            //子组件通过props属性使用父组件传的值
        )
    }
}

export default TodoItem
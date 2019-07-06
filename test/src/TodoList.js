import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        //上面的这些语句都是一些优化吧，反正现在这个阶段的我还是不怎么看的懂的，就先这么写吧
    }

    handleBtnClick() {
        this.setState(
            {
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            }
        )
    }

    //添加item

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    //监听input更改

    handleItemClick(index) {
        const list = this.state.list
        list.splice(index, 1)
        this.setState({list})
    }
    //删除item

    deleteItem(index){
        const list = this.state.list
        list.splice(index, 1)
        this.setState({list})
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className={'red-btn'} onClick={this.handleBtnClick}>add</button>
                    {
                        //使用className代表class属性来设计类名
                    }
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((item, key) => {
                                return <TodoItem deleteItem={this.deleteItem} key={key} content={item} index={key}/>
                                //这里拆分了一个组件出来，父组件通过属性传值给子组件
                                // return <li key={key} onClick={this.handleItemClick.bind(this,key)}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList
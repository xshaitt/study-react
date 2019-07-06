import React, {Component} from 'react'
import Table from './Table'
import SimpleTable from './SimpleTable'
import TodoList from './TodoList'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello world!</h1>
                <Table/>
                <SimpleTable/>
                <TodoList/>
            </div>
        )
    }

}

export default App
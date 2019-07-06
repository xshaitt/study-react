import React, {Component} from 'react'
import Table from './Table'
import SimpleTable from './SimpleTable'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello world!</h1>
                <Table/>
                <SimpleTable/>
            </div>
        )
    }

}

export default App
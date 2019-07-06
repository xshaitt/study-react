import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <td>姓名</td>
            <td>性别</td>
        </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
        <tr>
            <td>帅华</td>
            <td>男</td>
        </tr>
        <tr>
            <td>婷婷</td>
            <td>女</td>
        </tr>
        </tbody>
    )
}

class SimpleTable extends Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}
export default SimpleTable
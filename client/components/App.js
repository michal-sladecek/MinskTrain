import React from 'react'
import NotImplemented from './NotImplemented'
const App = React.createClass({
    render() {
        return (
            <div className='App'>
                <h1>Minskeho vlaciky</h1>
                {this.props.children}
            </div>
        )
    }
})
export default App
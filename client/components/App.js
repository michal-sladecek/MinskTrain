import React from 'react'
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
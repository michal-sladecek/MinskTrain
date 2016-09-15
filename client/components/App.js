import React from 'react'
const App = React.createClass({
    render() {
        return (
            <div className='App'>
                {this.props.children}
            </div>
        )
    }
})
export default App
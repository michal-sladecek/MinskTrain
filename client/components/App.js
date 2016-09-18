import React from 'react'
import NotificationContainer from '../containers/NotificationContainer'

const App = React.createClass({
    render() {
        return (
            <div className='App'>
                {this.props.children}
                <NotificationContainer/>
            </div>
        )
    }
})
export default App
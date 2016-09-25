import React from 'react'
import messages from '../messages/messages'
const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>Minskeho vlaciky</h1>
                {this.props.children}
            </div>
        )
    }
})

export default Main
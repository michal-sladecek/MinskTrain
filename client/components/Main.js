import React from 'react'
const main = React.createClass({
    render() {
        return (
            <div>
                <h1>Misnkeho vlaciky</h1>
                {React.cloneElement(this.props.children, this.props) }
            </div>
        )
    }
})

export default main
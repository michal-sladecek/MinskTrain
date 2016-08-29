import React from 'react'

const NotImplemented = React.createClass({
    render(){
        return (
            <div className='not-implemented'>
            {this.props.name} is not implemented yet
            </div>
        )
    }
})

export default NotImplemented
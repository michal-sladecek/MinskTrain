import React from 'react'
import {Button} from 'react-bootstrap'
const Locomotive = React.createClass({
    render() {
        let buttons = []
        return (
            <div className='Locomotive'>
                <Button bsSize='sm' onClick={this.props.play}>
                    <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                </Button>
                <Button bsSize='sm' onClick={this.props.forward}>
                    <span className="glyphicon glyphicon-forward" aria-hidden="true"></span>
                </Button>
                <Button bsSize='sm' onClick={this.props.fast}>
                    <span className="glyphicon glyphicon-fast-forward" aria-hidden="true"></span>
                </Button>
                <Button bsSize='sm' onClick={this.props.pause}>
                    <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
                </Button>
                <Button bsSize='sm' onClick={this.props.stop}>
                    <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
                </Button>
            </div>
        )
    }
})
export default Locomotive
import React from 'react'
import NotImplemented from './NotImplemented'
import {FormControl} from 'react-bootstrap'
const Carriage = React.createClass({
    render() {
        let indexChar = String.fromCharCode(this.props.id+64)
        return (
            <div className='Carriage'>
                <p>{indexChar}</p>
                <FormControl readOnly
                    bsSize="sm"
                    type="text"
                    value="0"
                />
            </div>
        )
    }
})
export default Carriage
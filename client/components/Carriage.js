import React from 'react'
import NotImplemented from './NotImplemented'
import {FormControl} from 'react-bootstrap'
const Carriage = ({id, num, changeNumber} ) => {
        const handler = (e) => {
            changeNumber(id,e.target.value)
        }
        let indexChar = String.fromCharCode(id+64)
        return (
            <div className='Carriage'>
                <p>{indexChar}</p>
                <FormControl
                    bsSize="sm"
                    type="text"
                    value={num}
                    onKeyPress={handler}
                    onChange={handler}
                />
            </div>
        )
}
export default Carriage
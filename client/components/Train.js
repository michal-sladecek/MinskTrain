import React from 'react'
import Locomotive from './Locomotive'
import Carriage from './Carriage'
import {Col} from 'react-bootstrap'
const Train = React.createClass({
    render(){
        let vagons = []
        for(var i=0;i<11;++i){
            vagons.push(
                <Col md={1} key={i}>
                    <Carriage key={11-i} id={11-i}/>
                </Col>)
        }
        vagons.push(
                <Col md={1} key={12}>
                    <Locomotive/>
                </Col>)
        return (
            <div className='Train'>
                {vagons}
            </div>
        )
    }
})

export default Train
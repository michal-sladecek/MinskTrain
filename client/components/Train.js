import React from 'react'
import LocomotiveContainer from '../containers/LocomotiveContainer'
import CarriageContainer from '../containers/CarriageContainer'
import {Col} from 'react-bootstrap'
const Train = React.createClass({
    render(){
        let vagons = []
        for(var i=0;i<11;++i){
            vagons.push(
                <Col md={1} key={i}>
                    <CarriageContainer key={10-i} id={10-i}/>
                </Col>)
        }
        vagons.push(
                <Col md={1} key={12}>
                    <LocomotiveContainer/>
                </Col>)
        return (
            <div className='Train'>
                {vagons}
            </div>
        )
    }
})

export default Train
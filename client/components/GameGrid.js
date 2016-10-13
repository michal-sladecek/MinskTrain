import React from 'react'
import TileContainer from '../containers/TileContainer'
import AnimationContainer from '../containers/AnimationContainer'
import NotImplemented from './NotImplemented'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import messages from '../messages/messages'

import env from '../../env'
const TrainBeg = React.createClass({
    render() {
        const tooltip = (
             <Tooltip id="tooltip" >{messages.stationFrom}</Tooltip>
        )
        return (
            <OverlayTrigger placement="left" overlay={tooltip} draggable>
            <div className='trainBeg'>         
                    <svg width='40' height='40'>
                        <rect x="20" y="10" width="20" height="20"/>
                    </svg>      
            </div>
            </OverlayTrigger>)
    }
})
const TrainEnd = React.createClass({
    
    render(){
        const tooltip = (
             <Tooltip id="tooltip" >{messages.stationTo}</Tooltip>
        )
        return (
            <OverlayTrigger placement="left" overlay={tooltip} draggable>
                <div className='trainEnd'> 
                        <svg width='40' height='40'>
                            <rect x="0" y="10" width="20" height="20"/>
                        </svg>
                </div>
            </OverlayTrigger>)
    }
})
const Empty = React.createClass({

    render() {
        return (
            <div className='empty-tile'>
                <div style={{visibility: 'hidden', height:'42px', width:'42px'}}>
                </div>
            </div>
        )
    }
})
const GameGrid = React.createClass({
    render() {
        var rows=[]
        for(var i=0;i<env.gameHeight;++i){
            var row = []
            if(i==0) row.push(<TrainBeg key={10000}/>)
            else row.push(<Empty/>)
            for(var j=0;j<env.gameWidth;++j){
                row.push(<TileContainer key={i*20+j} x={i} y={j}/>)
            }
            if(i==env.gameHeight-1)row.push(<TrainEnd key={10001}/>)
            else row.push(<Empty/>)
            rows.push(<div className='TileRow' key={i}>{row}</div>)
        }
        return (
           <div className='GameGrid'>
                <div className='gridWithAnimation'>
                        <div className='grid'>
                        {rows}
                        </div>
                        <AnimationContainer/>
                </div> 
           </div>
        )
    }
})
export default GameGrid
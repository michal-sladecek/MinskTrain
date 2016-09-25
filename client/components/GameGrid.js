import React from 'react'
import TileContainer from '../containers/TileContainer'
import AnimationContainer from '../containers/AnimationContainer'
import NotImplemented from './NotImplemented'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import messages from '../messages/messages'

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
const GameGrid = React.createClass({
    render() {
        var rows=[]
        for(var i=0;i<15;++i){
            var row = []
            if(i==0) row.push(<TrainBeg key={10000}/>)
            for(var j=0;j<20;++j){
                row.push(<TileContainer key={i*20+j} x={i} y={j}/>)
            }
            if(i==14)row.push(<TrainEnd key={10001}/>)
            if(i==14)rows.push(<div className='LastTileRow' key={i}>{row}</div>)
            else rows.push(<div className='TileRow' key={i}>{row}</div>)
        }
        //RDRRDLLLUL
        return (
           <div className='GameGrid'>
            <div className='grid'>
            {rows}
            </div>
            <AnimationContainer/>     
            <div className='clear'/>     
           </div>
        )
    }
})
export default GameGrid
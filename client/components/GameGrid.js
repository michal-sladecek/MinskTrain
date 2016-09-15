import React from 'react'
import TileContainer from '../containers/TileContainer'
import AnimationContainer from '../containers/AnimationContainer'
import NotImplemented from './NotImplemented'
const GameGrid = React.createClass({
    render() {
        var rows=[]
        for(var i=0;i<15;++i){
            var row = []
            for(var j=0;j<20;++j){
                row.push(<TileContainer key={i*20+j} x={i} y={j}/>)
            }
            rows.push(<div className='TileRow' key={i}>{row}</div>)
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
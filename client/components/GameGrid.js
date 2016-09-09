import React from 'react'
import TileContainer from '../containers/TileContainer'
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
        return (
           <div >
            <div className='grid'>
            {rows}
            </div>
            <div className='animationSvg'>
                <svg width={800} height={600}>
                    <line x1="0" y1="0" x2="800" y2="600" style={{'stroke': 'rgb(255,0,0)','strokeWidth': '2' }}/> 
                </svg>
            </div>           
           </div>
        )
    }
})
export default GameGrid
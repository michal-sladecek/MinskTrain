import React from 'react'
import Tile from './Tile'
import NotImplemented from './NotImplemented'
const GameGrid = React.createClass({
    render() {
        var rows=[]
        for(var i=0;i<15;++i){
            var row = []
            for(var j=0;j<20;++j){
                row.push(<Tile key={i*20+j} x={i} y={j}/>)
            }
            rows.push(<div className='TileRow' key={i}>{row}</div>)
        }
        return (
           <div>
           {rows}
           </div>
        )
    }
})
export default GameGrid
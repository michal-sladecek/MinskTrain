import React from 'react'
import NotImplemented from './NotImplemented'
import items from './items/items'
const Tile = ({coord, show, useTool}) => {
    let tileImg=[]
    if(show){
        tileImg=items[show.type]
    }
    function onclick(e){
        e.preventDefault()
        useTool(coord)
    }
    return (
        <div className='Tile' onClick={onclick}>
            {
                tileImg
            }
        </div>
    )
}
export default Tile
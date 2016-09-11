const tileSize=42
const getAnimationPath = (animationStr, coord) => {
    let path = 'M '
    path += (coord.y*tileSize+tileSize/2) +" "+(coord.x*tileSize+tileSize/2)
    for(var i=0;i<animationStr.length;++i){
        switch(animationStr[i]){
            case 'U':
                path += 'v -'+ tileSize
                break
            case 'D':
                path += 'v '+ tileSize
                break
            case 'L':
                path += 'h -'+ tileSize
                break
            case 'R':
                path += 'h '+ tileSize
                break
        }
        path += ' '
    }
    return path
}
import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/trainActions'

const Animation = React.createClass({
    render(){
        let animation = this.props.str
        if(!animation){
            return (<div/>)
        }
        console.log(getAnimationPath(animation, this.props.coord))
        const style = {'fill':'none',stroke: 'rgb(255,0,0)','strokeWidth': '2'}
        let station = this.props.station
        if(animation.length > 0)
            setTimeout(function(){ station(); }, this.props.speed*animation.length*1000);
        return (
        <div className='animationSvg'>
            <svg width="840" height="630">
                <path style={style} 
                    d={getAnimationPath(animation, this.props.coord)}/>
            </svg>
         </div>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
  return {
      str: state.game.animation.str,
      speed: state.game.animation.speed,
      coord: state.game.train.coord
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const AnimationContainer = connect(
  mapStateToProps,mapDispatchToProps)(Animation)

export default AnimationContainer
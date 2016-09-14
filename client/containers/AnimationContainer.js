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
    getInitialState() {
        return {
            updateAnimation: false,
            style: {
                'fill':'none',stroke: 'rgb(255,0,0)','strokeWidth': '10'
            },
            animationPath: '',
            reRender: false,
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if(this.refs.path){
            let path = this.refs.path
            const length = path.getTotalLength()
            if(this.state.updateAnimation) {   
                this.setState({
                    style: {
                        ...this.state.style,
                        strokeDasharray: '15 '+(length-15),
                        strokeDashoffset: '0',
                    }, 
                    updateAnimation: false,
                    reRender: true    
                }    
                )
            } else {
                if(!this.state.reRender) return
                let curOffset = parseFloat(this.state.style.strokeDashoffset)
                if(curOffset <= -length+15) this.props.station()
                else {
                    this.setState( {style: {...this.state.style, strokeDashoffset: curOffset - 1 }, reRender: false})
                    setTimeout(()=>{this.setState({reRender: true})}, this.props.speed*5)
                }
            }
        }
    },

    componentWillReceiveProps(nextProps) {
        if(nextProps.speed == this.props.speed)
            this.setState({updateAnimation:true})
        this.setState({reRender: true})
    },
    render(){
        let animation = this.props.str
        if(!animation){
            return (<div/>)
        }
        if(this.state.updateAnimation) {
            this.state.animationPath = getAnimationPath(animation, this.props.coord)
        }
        return (
            <div className='animationSvg'>
                <svg width="840" height="630">
                    <path ref='path' style={this.state.style} 
                        d={this.state.animationPath}/>
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
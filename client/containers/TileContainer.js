import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Tile from '../components/Tile'
import * as actionCreators from '../actions/toolActions'

const mapStateToProps = (state, ownProps) => {
  let modal = true
  let tooltip = false
  if(state.game.notAskId.indexOf(state.game.currentTool) != -1){
    modal = false
  }
  if(state.game.map[ownProps.x][ownProps.y] && 
    state.game.notAskId.indexOf(state.game.map[ownProps.x][ownProps.y].type) == -1){
      tooltip = true
    }
  return {
      coord:{
          x:ownProps.x,
          y:ownProps.y
      },
      currentTool: state.game.currentTool,
      show: state.game.map[ownProps.x][ownProps.y],
      tooltip
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}


const TileContainer = connect(
  mapStateToProps, mapDispatchToProps)(Tile)

export default TileContainer
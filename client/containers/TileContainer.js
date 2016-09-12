import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Tile from '../components/Tile'
import * as actionCreators from '../actions/toolActions'

const mapStateToProps = (state, ownProps) => {
  let modal = true
  if(state.game.notAskId.indexOf(state.game.currentTool) != -1){
    modal = false
  }
  return {
      coord:{
          x:ownProps.x,
          y:ownProps.y
      },
      show: state.game.map[ownProps.x][ownProps.y],
      modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}


const TileContainer = connect(
  mapStateToProps, mapDispatchToProps)(Tile)

export default TileContainer
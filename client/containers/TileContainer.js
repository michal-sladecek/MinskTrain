import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Tile from '../components/Tile'
import * as actionCreators from '../actions/toolActions'

const mapStateToProps = (state, ownProps) => {
  return {
      coord:{
          x:ownProps.x,
          y:ownProps.y
      },
      show: state.game.map[ownProps.x][ownProps.y]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}


const TileContainer = connect(
  mapStateToProps, mapDispatchToProps)(Tile)

export default TileContainer
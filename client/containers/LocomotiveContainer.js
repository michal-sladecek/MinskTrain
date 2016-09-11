import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Locomotive from '../components/Locomotive'
import * as actionCreators from '../actions/trainActions'

const mapStateToProps = (state, ownProps) => {
  return {
    playing: state.game.playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const LocomotiveContainer = connect(
  mapStateToProps,mapDispatchToProps)(Locomotive)

export default LocomotiveContainer
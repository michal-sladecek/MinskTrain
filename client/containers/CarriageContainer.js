import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Carriage from '../components/Carriage'
import * as actionCreators from '../actions/trainActions'

const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.id,
      num: state.game.train.carriage[ownProps.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const CarriageContainer = connect(
  mapStateToProps,mapDispatchToProps)(Carriage)

export default CarriageContainer
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import LevelDescription from '../components/LevelDescription'
import * as actionCreators from '../actions/serverActions'

const mapStateToProps = (state, ownProps) => {
    return {
         level: state.game.levels[ownProps.level],
         fetching: state.game.fetching
    }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}
const LevelDescriptionContainer = connect(
  mapStateToProps, mapDispatchToProps)(LevelDescription)

export default LevelDescriptionContainer
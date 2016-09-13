import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ToolBox from '../components/ToolBox'
import * as actionCreators from '../actions/toolActions'

const mapStateToProps = (state, ownProps) => {
  return {
      groups: state.game.tools,
      current: state.game.currentTool,
      level: state.game.levels[ownProps.level]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const ToolBoxContainer = connect(
  mapStateToProps,mapDispatchToProps)(ToolBox)

export default ToolBoxContainer
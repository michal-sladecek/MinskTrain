import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ToolBox from '../components/ToolBox'
import * as actionCreators from '../actions/toolActions'

const mapStateToProps = (state) => {
  return {
      groups: state.tools.tools,
      current: state.tools.currentTool
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const ToolBoxContainer = connect(
  mapStateToProps,mapDispatchToProps)(ToolBox)

export default ToolBoxContainer
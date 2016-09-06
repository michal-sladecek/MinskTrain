import { connect } from 'react-redux'
import ToolBox from '../components/ToolBox'

const mapStateToProps = (state) => {
  return {
      groups: state.tools.tools,
      current: state.tools.currentTool
  }
}

const ToolBoxContainer = connect(
  mapStateToProps)(ToolBox)

export default ToolBoxContainer
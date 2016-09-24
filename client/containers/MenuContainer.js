import { connect } from 'react-redux'
import Menu from '../components/Menu'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/serverActions'


const mapStateToProps = (state) => {
  return {
      levels: state.game.levels
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}
const MenuContainer = connect(
  mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer
import { connect } from 'react-redux'
import Menu from '../components/Menu'

const mapStateToProps = (state) => {
  return {
      levels: state.game.levels
  }
}

const MenuContainer = connect(
  mapStateToProps)(Menu)

export default MenuContainer
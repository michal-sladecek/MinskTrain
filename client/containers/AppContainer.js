import {connect} from 'react-redux'
import App from '../components/App'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/serverActions'


export default connect(
  (state) => ({profile: state.game.profile}),
  (dispatch) => bindActionCreators(actionCreators, dispatch),
)(App)

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    levels: state.levels,
    tools: state.tools
  }
}

const App = connect(mapStateToProps)(Main);

export default App;
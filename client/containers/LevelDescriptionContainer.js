import { connect } from 'react-redux'
import LevelDescription from '../components/LevelDescription'

const mapStateToProps = (state, ownProps) => {
    return {
         level: state.levels.levels[ownProps.level]
    }
}

const LevelDescriptionContainer = connect(
  mapStateToProps)(LevelDescription)

export default LevelDescriptionContainer
import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Row, Col} from 'react-bootstrap'
import Train from '../components/Train'
import ToolBoxContainer from './ToolBoxContainer'
import GameGrid from '../components/GameGrid'
import LevelDescriptionContainer from './LevelDescriptionContainer'
import * as actionCreators from '../actions/trainActions'
import {Modal} from 'react-bootstrap'
import errors from '../messages/errors'

const Game = React.createClass({
    componentDidMount(){
        this.props.setLevel(this.props.params.level)
    },
    render(){
        return (
            <div className='game'>
                <Train/>
                <div className='bottom-game'>
                    <ToolBoxContainer level={this.props.params.level}/>
                    <GameGrid/>
                    <LevelDescriptionContainer level={this.props.params.level}/>
                </div>
            </div>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const GameContainer = connect(
  mapStateToProps,mapDispatchToProps)(Game)
export default GameContainer
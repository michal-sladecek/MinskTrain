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


const Game = React.createClass({
    render(){
        const hideModal = (e) => {
            this.props.clearError()
        }
        return (
            <div>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <Train/>
                    </Col>
                </Row>
                <Row>
                    <Col md={1} mdOffset={1} smOffset={0}>
                        <ToolBoxContainer/>
                    </Col>
                    <Col md={7} sm={8}>
                        <GameGrid/>
                    </Col>
                    <Col md={2}>
                        <LevelDescriptionContainer level={this.props.params.level}/>
                    </Col>
                </Row>
                <Modal show={this.props.error !== ''} onHide={hideModal}>
                    <h3>{this.props.error}</h3>
                </Modal>
            </div>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
  return {
      error: state.game.train.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const GameContainer = connect(
  mapStateToProps,mapDispatchToProps)(Game)
export default GameContainer
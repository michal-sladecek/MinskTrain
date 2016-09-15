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
    componentDidMount(){
        this.props.setLevel(this.props.params.level)
    },
    render(){
        const hideModal = (e) => {
            this.props.clearNotify()
        }
        return (
            <div>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <Train/>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                        <ToolBoxContainer level={this.props.params.level}/>
                    </Col>
                    <Col md={9}>
                        <GameGrid/>
                    </Col>
                    <Col md={1}>
                        <LevelDescriptionContainer level={this.props.params.level}/>
                    </Col>
                </Row>
                <Modal show={this.props.notify !== ''} onHide={hideModal}>
                    <h3>{this.props.notify}</h3>
                </Modal>
            </div>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
  return {
      notify: state.game.train.notify
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const GameContainer = connect(
  mapStateToProps,mapDispatchToProps)(Game)
export default GameContainer
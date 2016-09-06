import React from 'react'
import NotImplemented from './NotImplemented'
import {Row, Col} from 'react-bootstrap'
import Train from './Train'
import ToolBoxContainer from '../containers/ToolBoxContainer'
import GameGrid from './GameGrid'
import LevelDescriptionContainer from '../containers/LevelDescriptionContainer'
const Game = React.createClass({
    render(){
        return (
            <div>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <Train/>
                    </Col>
                </Row>
                <Row>
                    <Col md={1} mdOffset={1}>
                        <ToolBoxContainer/>
                    </Col>
                    <Col md={7}>
                        <GameGrid/>
                    </Col>
                    <Col md={2}>
                        <LevelDescriptionContainer level={this.props.params.level}/>
                    </Col>
                </Row>
            </div>
        )
    }
})

export default Game
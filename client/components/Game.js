import React from 'react'
import NotImplemented from './NotImplemented'
import {Row, Col} from 'react-bootstrap'
import Train from './Train'
import ToolBox from './ToolBox'
import GameGrid from './GameGrid'
import LevelDescription from './LevelDescription'
const Game = React.createClass({
    render(){
        return (
            <div>
                <Row>
                    <Col md='10' mdOffset='1'>
                        <Train {...this.props}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='1' mdOffset='1'>
                        <ToolBox {...this.props}/>
                    </Col>
                    <Col md='7'>
                        <GameGrid {...this.props}/>
                    </Col>
                    <Col md='2'>
                        <LevelDescription {...this.props}/>
                    </Col>
                </Row>
            </div>
        )
    }
})

export default Game
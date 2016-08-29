import React from 'react'
import NotImplemented from './NotImplemented'
import LevelIcon from './LevelIcon'
import {Row, Col} from 'react-bootstrap'
import {divideArray} from '../functions/helpers'

const LevelRow = React.createClass({
    render() {
        console.log(this.props)
        const levels = this.props.levels
        console.log(levels)
        return (
            <div className='levels-row'>
                {
                    levels.map((object, i) => {
                        return <Col md={3} key={i}><LevelIcon key={i} level={levels[i]} {...this.props}/></Col>
                    })
                }
            </div>
        )
    }
})

const Menu = React.createClass({
    render() {
        let levelsDivided = divideArray(this.props.levels.levels.slice(0),4)
        return (
            <div className='levels-grid'>
                {
                    levelsDivided.map((object, i) => {
                        return <Row key={i}><LevelRow key={i} { ...this.props} levels={levelsDivided[i]} /></Row>
                    })
                }
            </div>
        )
    }
})



export default Menu
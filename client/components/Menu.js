import React from 'react'
import NotImplemented from './NotImplemented'
import LevelIcon from './LevelIcon'
import {Grid, Row, Col} from 'react-bootstrap'
import {divideArray} from '../functions/helpers'


const Menu = React.createClass({
  componentDidMount() {
    this.props.getSolvedLevels()
  },
  render() {
    const levels = Object.keys(this.props.levels).map((key) => this.props.levels[key])
    return (
      <Grid>
        <Row>
          {
            levels.map((level, i) => (
              <Col lg={3} md={4} sm={6} key={i} style={{height: 115}}>
                <LevelIcon level={level}/>
              </Col>
            ))
          }
        </Row>
      </Grid>
    )
  }
})

export default Menu

import React from 'react' 
import {Link} from 'react-router'
import {Button, Glyphicon} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const LevelIcon = React.createClass({
  render() {
    return (
      <LinkContainer to={`/game/${this.props.level.id}`}>
        <Button style={{width: '100%'}}>
          <h3>
            Level {this.props.level.id}
            <span>&nbsp;&nbsp;{this.props.level.objective.slice(0, 4)}</span>
            {this.props.level.solved &&
              (<span>&nbsp;&nbsp;<Glyphicon glyph="ok" /></span>)
            }
          </h3>
        </Button>
      </LinkContainer>
    )
  }
})

export default LevelIcon

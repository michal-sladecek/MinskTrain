import React from 'react' 
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
const LevelIcon = React.createClass({
    render() {
        return (
            <Link to={`/game/${this.props.level.id}`}>
            <Button block>
            
            <div className='level-icon'>  
                    {this.props.level.solved? <h2>VYRIESENY</h2>:null}
                    <h2>Level {this.props.level.id}</h2>     
                    <p>{this.props.level.objective}</p>     
            </div>
            
            </Button>
            </Link>
        )
    }
})

export default LevelIcon

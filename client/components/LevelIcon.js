import React from 'react' 
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
const LevelIcon = React.createClass({
    render() {
        return (
            <Link to={`/game/${this.props.level.id}`}>            
                <div className='level-icon'>
                        {this.props.level.solved? <h2><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></h2>:null}
                        <h3>{this.props.level.title}</h3>  
                </div>
            </Link>
        )
    }
})

export default LevelIcon

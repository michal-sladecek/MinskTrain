import React from 'react' 
import {Link} from 'react-router'

const LevelIcon = React.createClass({
    render() {
        return (
            <Link to={`/game/${this.props.level.id}`}>
            <div className='level-icon'>
                
                    <p>{this.props.level.objective}</p>
                
            </div>
            </Link>
        )
    }
})

export default LevelIcon

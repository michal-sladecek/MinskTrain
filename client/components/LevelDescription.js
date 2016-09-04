import React from 'react'
import NotImplemented from './NotImplemented'
const LevelDescription = React.createClass({
    render() {
        const id = this.props.params.level
        const levels = this.props.levels["levels"]
        return (
            <div className='LevelDescription'>
                <h3>Level {id}</h3>
                <p>{levels[id].objective}</p>
                <div className='Hint'>
                    <h4 className='Hint'>Hint</h4>
                    <p>{levels[id].hint}</p>
                </div>
            </div>
        )
    }
})
export default LevelDescription
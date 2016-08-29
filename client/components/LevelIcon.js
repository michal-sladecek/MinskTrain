import React from 'react' 

const LevelIcon = React.createClass({
    render() {
        return (
            <div className='level-icon'>
                <p>{this.props.level.objective}</p>
            </div>
        )
    }
})

export default LevelIcon
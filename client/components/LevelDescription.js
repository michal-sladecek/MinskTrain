import React from 'react'
import NotImplemented from './NotImplemented'


const LevelDescription = ({level}) =>{
        return (
            <div className='LevelDescription'>
                <h3>Level {level.id}</h3>
                <p>{level.objective}</p>
                <div className='Hint'>
                    <h4 className='Hint'>Hint</h4>
                    <p>{level.hint}</p>
                </div>
            </div>
        )
}
export default LevelDescription
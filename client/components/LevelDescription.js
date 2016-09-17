import React from 'react'
import {Button} from 'react-bootstrap'


const LevelDescription = ({level, sendLevel}) =>{
        return (
            <div className='LevelDescription'>
                <h3>Level {level.id}</h3>
                <p>{level.objective}</p>
                <Button bsSize='sm' onClick={sendLevel}>Odosli riesenie</Button>
                <div className='Hint'>
                    <h4 className='Hint'>Hint</h4>
                    <p>{level.hint}</p>
                </div>
            </div>
        )
}
export default LevelDescription
import React from 'react'
import {Button} from 'react-bootstrap'
import messages from '../messages/messages'

const LevelDescription = ({level, sendLevel, fetching, showHelp}) =>{
        let button =''
        if(fetching){
            button = (<Button bsSize='sm' disabled>{messages.testing}</Button>)
        } else {
            button = (<Button bsSize='sm' onClick={sendLevel}>{messages.sendSolution}</Button>)
        }
        return (
            <div className='LevelDescription'>
                <h3>Level {level.id}</h3>
                <p><strong>body</strong>: {level.points}</p>
                <p><strong>úloha</strong>: {level.objective}</p>
                <p><strong>hint</strong>: {level.hint}</p>
                <p>{button}</p>
                <p><Button bsSize='sm' onClick={showHelp}>{messages.showHelp}</Button></p>
            </div>
        )
}
export default LevelDescription
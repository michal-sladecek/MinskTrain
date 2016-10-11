import React from 'react'
import {Button} from 'react-bootstrap'
import messages from '../messages/messages'
import {Link} from 'react-router'

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
                <p>{level.objective}</p>
                
                <div className='Hint'>
                    <p>{level.hint}</p>
                </div>
                {button}
                <br/><br/>
                <Button bsSize='sm' onClick={showHelp}>{messages.showHelp}</Button>
                <br/><br/>
                <Link to='/'>Späť do menu</Link>
            </div>
        )
}
export default LevelDescription
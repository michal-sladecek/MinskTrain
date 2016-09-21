import React from 'react'
import {Button} from 'react-bootstrap'


const LevelDescription = ({level, sendLevel, fetching, showHelp}) =>{
        let button =''
        if(fetching){
            button = (<Button bsSize='sm' disabled>Testuje sa...</Button>)
        } else {
            button = (<Button bsSize='sm' onClick={sendLevel}>Odosli riesenie</Button>)
        }
        return (
            <div className='LevelDescription'>
                <h3>Level {level.id}</h3>
                <p>{level.objective}</p>
                {button}
                <div className='Hint'>
                    <h4 className='Hint'>Hint</h4>
                    <p>{level.hint}</p>
                </div>
                <Button bsSize='sm' onClick={showHelp}>Zobraz napovedu</Button>
            </div>
        )
}
export default LevelDescription
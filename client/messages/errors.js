import React from 'react'
import {Button} from 'react-bootstrap'
const errors = {
    'BAD_OPERATION': (<h3>'Ups, vlacik sa nam vykolajil'</h3>),
    'SUCCESS': (<h3>'Juchuuu, vlacik splnil ulohu'</h3>),
    'FAILURE': (<h3>'Dakde bola spachana chyba'</h3>),
    'TLE': (<h3>Casovy limit vyprsal</h3>)
}
const functions = {
    'SERVER': (notify, func) => {
        if(notify.ok){
            return (<h2>Super! Level splneny :) </h2>)
        }
        let vlaciky = notify.failure.map((num, i) => {
            return (<p>Vo vlaciku {String.fromCharCode(i+65)} bolo na zaciatku cislo {num}</p>)
        }) 
        let onclick= ()=>{
            func.otestuj(notify.failure)
        }
        return (
            <div>
                <h2>Level sa nepodarilo splnit.</h2>
                {errors[notify.reason]}
                {vlaciky}
                <Button bsSize='sm' onClick={onclick}>Otestuj si :)</Button>
            </div>
        )
    }
}
function getNotify(notify, func){
    console.log(notify)
    if(notify.id in errors) {
        return errors[notify.id]
    } 
    else if(notify.id in functions) {
        return functions[notify.id](notify, func)
    }
}
export default getNotify
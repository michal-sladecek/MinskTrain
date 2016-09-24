import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

const errors = {
    'BAD_OPERATION': (<h3>'Ups, vlacik sa nam vykolajil'</h3>),
    'SUCCESS': (<h3>'Juchuuu, vlacik splnil ulohu'</h3>),
    'FAILURE': (<h3>'Dakde bola spachana chyba'</h3>),
    'TLE': (<h3>Casovy limit vyprsal</h3>),
    'NOT_ALLOWED': (<h3>Pouzivas stanicu ktora je v tomto levely zakazana.</h3>),
    'HELP': (
        <div>
        <h2>Napoveda k vlaciku</h2>
        <p>V tejto hre staviate kolajnice, pokladate stanice a cielom je, aby vasa trat plnila ulohu ked po nej prejde vlacik</p>
        <p>Tu si mozte testovat vase riesenie na roznych cislach vo vlaciku, ked kliknete na vagon tak mate moznost napisat don cislo</p>
        <p>Na to aby vas level presiel testovacom, musi byt schopny splnit ulohu nech su na zaciatku vo vlaciku hocijake cisla</p>
        <p>Postupom hry budes dostavat nove stanice, tieto stanice su schopne robit s vlakom nejake operacie.</p>
        </div>
    )
}
const functions = {
    'SERVER': (notify, func, nextLevel) => {
        if(notify.ok){
            var next = '/'
            if(nextLevel !== 'menu'){
                next = '/game/'+nextLevel
            }
            const onclick= () => {
                console.log("CLicked")
                func.setLevel(nextLevel)
                func.hideModal()
            }
            return (
                <div>
                    <h2>Super! Level splneny :) </h2>
                    <Link onClick={onclick} to={next}>Dalsi level</Link>
                </div>
            )
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
function getNotify(notify, func, nextLevel){
    if(notify.id in errors) {
        return errors[notify.id]
    } 
    else if(notify.id in functions) {
        return functions[notify.id](notify, func, nextLevel)
    }
}
export default getNotify
import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

const errors = {
    'BAD_OPERATION': (
        <div>
            <h3>Vlacik sa vykoľajil.</h3><p>Možné príčiny:
                <ul>
                    <li>Vláčik vyšiel z mapy mimo stanicu kde má vyjsť.</li>
                    <li>Vláčik vošiel na políčko, kde nie je koľajnica.</li>
                    <li>Vláčik vošiel na koľajnicu zo strany z ktorej nie je príchod.</li>
                    <li>Vláčik urobil nejakú zakázanú operáciu (napr. vydelil nulou).</li>
                </ul>
            </p>
        </div>),
    'SUCCESS': (
        <div>
            <h3>Vláčik splnil úlohu</h3>
            <p>Body za úlohu sa ti ale ešte nezarátali, na to ti musí prejsť testami na stránke.</p>
            <p>Môžeš si skúsiť do vagónov napísať iné čísla a skúsiť ho znova.</p>
            <p>Alebo môžeš poslať vláčik na otestovanie kilknutím na tlačítko v menu vpravo.</p>
        </div>
    ),
    'FAILURE': ( 
        <div>
            <h3>Vláčik nesplnil úlohu</h3><p>Možné príčiny:
                <ul>
                    <li>Vláčik vošiel do koncovej stanice ale nemal splnené podmienky.</li>
                    <li>Vláčik nedošiel do koncovej stanice v časovom limite.</li>
                </ul>
            </p>
        </div>
    ),
    'NOT_ALLOWED': (
        <div>
            <h3>Používaš stanicu ktorá je v tomto leveli zakázaná.</h3>
            <p> Skontroluj si stanice, ktoré máš umiestnené.
                Niektorá z týchto staníc nie je v tomto leveli povolená a nenachádza sa ani v menu naľavo.
            </p>
        </div>
    ),
    'HELP': (
        <div>
            <h2>Tutoriál</h2>
            <p>Tu bude video.</p>
        </div>
    ),
    'GRADER_ERROR': (
        <div>
            <h2>Riešenie sa neodovzdalo!</h2>
            <p>Skús znova. Ak problém pretrváva, napíš na sysel@ksp.sk.</p>
        </div>
    )
}

const functions = {
    'SERVER': (notify, func) => {
        if (notify.ok) {
            var next = '/'
            const onclick = () => {
                func.hideModal()
            }
            return (
                <div>
                    <h2>Super! Level splnený :) </h2>
                    <p><Link onClick={onclick} to={next}>Späť do menu</Link></p>
                </div>
            )
        }
        let vlaciky = notify.failure.map((num, i) => {
            return (<p>Vo vláčiku {String.fromCharCode(i+65)} bolo na začiatku číslo {num}</p>)
        }) 
        let onclick= ()=>{
            func.otestuj(notify.failure)
        }
        return (
            <div>
                <h2>Level sa nepodarilo splniť.</h2>
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
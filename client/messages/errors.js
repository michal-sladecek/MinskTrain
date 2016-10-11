import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

const errors = {
    'BAD_OPERATION': (
        <div>
            <h3>Vlacik sa vykoľajil.</h3><p>Možné príčiny:
                <ul>
                    <li>Vláčik vyšiel z mapy mimo stanicu kde má vyjsť</li>
                    <li>Vláčik vošiel na políčko, kde nie je koľajnica</li>
                    <li>Vláčik vošiel na koľajnicu zo strany z ktorej nie je príchod</li>
                    <li>Vláčik urobil nejakú zakázanú operáciu (napr. vydelil nulou)</li>
                </ul>
            </p>
        </div>),
    'SUCCESS': (<div>
        <h3>Vláčik splnil úlohu</h3>
        <p>Body za úlohu sa ti ale ešte nezarátali, na to ti musí prejsť testami na stránke</p>
        <p>Môžeš si skúsiť do vagónov napísať iné čísla a skúsiť ho znova</p>
        <p>Alebo môžeš poslať vláčik na otestovanie (tlačítko napravo), a ak je správny tak sa ti zarátajú body</p>
    </div>),
    'FAILURE': ( 
        <div>
            <h3>Vláčik nesplnil úlohu</h3><p>Možné príčiny:
                <ul>
                    <li>Vláčik vošiel do koncovej stanice ale nemal splnené podmienky</li>
                    <li>Vláčik nedošiel do koncovej stanice v časovom limite</li>
                </ul>
            </p>
        </div>),
    'NOT_ALLOWED': (
        <div>
            <h3>Používaš stanicu, ktorá je v tomto leveli zakázaná.</h3>
            <p> Skontroluj si stanice, ktoré máš umiestnené.
                Niektorá z týchto staníc nie je v tomto leveli povolená a nenachádza sa ani v menu naľavo.
            </p>
        </div>
    ),
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
        if (notify.ok) {
            var next = '/'
            if (nextLevel !== 'menu') {
                next = '/game/' + nextLevel
            }
            const onclick = () => {
                func.setLevel(nextLevel)
                func.hideModal()
            }
            return (
                <div>
                    <h2>Super! Level splnený :) </h2>
                    <Link onClick={onclick} to={next}>Ďalší level</Link>
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
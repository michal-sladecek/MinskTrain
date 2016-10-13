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
            <h2>Nápoveda ku vláčiku</h2>
            <p>
                Vaším cieľom je postaviť trať, po ktorej vláčik prejde z jednej stanice do druhej. V každom levely
                musí vláčik splniť aj úlohu, ktorá sa zobrazuje naľavo. 
            </p>
            <p>
                Vláčik sa zobrazuje hore. V každom vozní sa nachádza nejaké číslo - toto číslo viete zmeniť kliknuťím na vozeň.
                Maximálne číslo, ktoré môžte do vozňa napísať, je 999. 
                V lokomotíve sa nachádzajú tlačítka na ovládanie vláčika - spusti, rýchlo, rýchlejšie, pauza, stopni úplne a resetuj čísla vo vláčiku.
            </p>
            <p>
                Naľavo máte menu, kde môžte vyberať nástroje, pomocou ktorých staviate koľajnice. V ďalších leveloch vám pribudnú nové nástroje.
                Až máte postavenú trať, môžte si otestovať túto trať pomocou tlačítok v lokomotíve.
            </p>
            <p>
                Ak chcete prejsť levelom, musíte ho odoslať ku nám. To urobíte pomocou tlačítka pošli na otestovanie.
                Vaše riešenie príde ku nám, a my do vláčika dáme rôzne čísla a pustíme ho po koľajniciach nech vieme, či s hocijakými začiatočnými číslami splní úlohu.
                Vieme ti ale garantovať, že do neho nikdy nedáme záporné čísla.
                Ak vláčik splní úlohu s hocijakými číslami na začiatku, tak sa ti level zaráta ako splnený.
                Ak nie, príde ti naspäť, s akými číslami vláčik neprešiel, nech si môžeš opraviť svoje riešenie. Testovanie trvá pár sekúnd a môžeš testovať koľkokrát chceš.
            </p>
            <p>
                To je zatiaľ asi všetko, viac sa dozvieš postupne počas hrania. Držíme ti palce :)
            </p>
            <p>
                Ak máš akékoľvek otázky alebo technické problémy, pošli email na adresu michalsladecek98@gmail.com. 
                Najlepšie ti budem vedieť poradiť ak pošleš aj screenshot obrazovky nech vidím, čo si robil a čo ti nefunguje.
            </p>
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
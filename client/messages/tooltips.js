import React from 'react'
function switchTooltip(id){
    return (
            <p>
                Pôjde rovno, ak vo vozni
                <i>
                {' '+String.fromCharCode(65+id)+' '}
                </i>
                bude 0.
            </p>
        )
}

const tooltips = {
    'VAGON': () => {
        <p>Kliknutím môžeš zmeniť číslo v tomto vagóne</p>
    },
    'UDPLUSONE': (id) => {
        return (
            <p>
                Pripočíta 1 k vozňu
                <i>
                {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'LRPLUSONE': (id) => {
        return (
            <p>
                Pripočíta 1 k vozňu
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'LRMINUSONE': (id) => {
        return (
            <p>
                Odpočíta 1 od vozňa
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'UDMINUSONE': (id) => {
        return (
            <p>
                Odpočíta 1 od vozňa
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'DRU': switchTooltip,
    'LDR': switchTooltip,
    'RUL': switchTooltip,
    'ULD': switchTooltip,
    'DLU': switchTooltip,
    'LUR': switchTooltip,
    'RDL': switchTooltip,
    'URD': switchTooltip,
    'LRSETX': (id) => {
        return (
            <p>
                Zmení číslo vo vozni
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)+' '}
                </i>
                na číslo z vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonFrom)}
                </i>
            </p>
        )
    },
    'UDSETX': (id) => {
        return (
            <p>
                Zmení číslo vo vozni
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)+' '}
                </i>
                na číslo z vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonFrom)}
                </i>
            </p>
        )
    },
    'LRPLUS': (id) => {
        return (
            <p>
                Sčíta čísla vo vozňoch
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a výsledok uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDPLUS': (id) => {
        return (
            <p>
                Sčíta čísla vo vozňoch
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a výsledok uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRMINUS': (id) => {
        return (
            <p>
                Odčíta číslo vo vozni
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromB)+' '}
                </i> od vozňa <i>{' '+String.fromCharCode(65+id.vagonFromA)+' '}</i>
                a výsledok uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDMINUS': (id) => {
        return (
            <p>
                Odčíta číslo vo vozni
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromB)+' '}
                </i> od vozňa <i>{' '+String.fromCharCode(65+id.vagonFromA)+' '}</i>
                a výsledok uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRMUL': (id) => {
        return (
            <p>
                Vynásobí čísla vo vozňoch
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a výsledok uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDMUL': (id) => {
        return (
            <p>
                Vynásobí čísla vo vozňoch
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> a <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a výsledok uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRDIV': (id) => {
        return (
            <p>
                Vydelí číslo vo vozni
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> číslom vo vozni <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a výsledok zaokrúhlený nadol uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDDIV': (id) => {
        return (
             <p>
                Vydelí číslo vo vozni
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> číslom vo vozni <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                a výsledok zaokrúhlený nadol uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'LRMOD': (id) => {
        return (
            <p>
                Zvyšok
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> po delení číslom <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    },
    'UDMOD': (id) => {
        return (
              <p>
                Zvyšok
                <i>
                 {' '+String.fromCharCode(65+id.vagonFromA)+' '}
                </i> po delení číslom <i>{' '+String.fromCharCode(65+id.vagonFromB)+' '}</i>
                uloží do vozňa
                <i>
                 {' '+String.fromCharCode(65+id.vagonTo)}
                </i>
            </p>
        )
    }
}

export default tooltips
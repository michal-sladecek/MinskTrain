import React from 'react'
function switchTooltip(id){
    return (
            <p>
                Pojde rovno, ak vo vagone 
                <i>
                {' '+String.fromCharCode(65+id)+' '}
                </i>
                bude 0.
            </p>
        )
}

const tooltips = {
    'UDPLUSONE': (id) => {
        return (
            <p>
                Pripocita 1 k vagonu 
                <i>
                {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'LRPLUSONE': (id) => {
        return (
            <p>
                Pripocita 1 k vagonu 
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'LRMINUSONE': (id) => {
        return (
            <p>
                Odpocita 1 od vagona 
                <i>
                 {' '+String.fromCharCode(65+id)+' '}
                </i>
            </p>
        )
    },
    'UDMINUSONE': (id) => {
        return (
            <p>
                Odpocita 1 od vagona 
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
    'URD': switchTooltip
}

export default tooltips
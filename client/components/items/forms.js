import React from 'react'

const getBuildModal = (submit, type) => {
    switch(type){
        case 'LR':
        case 'UD':
        case 'RU':
        case 'UL':
        case 'LD':
        case 'DR':
            return null
        case 'UDPLUSONE':
        case 'LRPLUSONE':
        case 'LRMINUSONE':
        case 'UDMINUSONE':
        case 'DRU':
        case 'LDR':
        case 'RUL':
        case 'ULD':
        case 'DLU':
        case 'LUR':
        case 'RDL':
        case 'URD':
            return (
                <form onSubmit={submit}>
                    <input type='text' placeholder='Zadaj znak vagona' autoFocus/>
                </form>
            )
        case 'LRSETX':
        case 'UDSETX':
            return (
                <form onSubmit={submit}>
                    <input type='text' placeholder='Enter character of carriage to set' autoFocus/><br/>
                    <input type='text' placeholder='Enter number to take value from'/>
                    <input type="submit"/>
                </form>
            )
    }
}

export default getBuildModal
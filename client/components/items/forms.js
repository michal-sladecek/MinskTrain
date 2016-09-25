import React from 'react'
import messages from '../../messages/messages'
const getBuildModal = (submit, type) => {
    switch(type){
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
                    <input type='text' placeholder={messages.enterVagon} autoFocus/>
                </form>
            )
        case 'LRSETX':
        case 'UDSETX':
            return (
                <form onSubmit={submit}>
                    <input type='text' placeholder={messages.enterVagonFrom1} autoFocus/><br/>
                    <input type='text' placeholder={messages.enterVagonTo}/><br/>
                    <input type="submit"/>
                </form>
            )
        case 'LRPLUS':
        case 'UDPLUS':
        case 'LRMINUS':
        case 'UDMINUS':
        case 'LRMUL':
        case 'UDMUL':
        case 'LRDIV':
        case 'UDDIV':
        case 'LRMOD':
        case 'UDMOD':
            return (
                <form onSubmit={submit}>
                    <input type='text' placeholder={messages.enterVagonFrom1} autoFocus/><br/>
                    <input type='text' placeholder={messages.enterVagonFrom2}/><br/>
                    <input type='text' placeholder={messages.enterVagonTo}/><br/>
                    <input type="submit"/>
                </form>
            )
        
        default:
            return null
    }
}

export default getBuildModal
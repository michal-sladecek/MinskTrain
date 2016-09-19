import React from 'react'

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
                    <input type='text' placeholder='Zadaj znak vagona' autoFocus/>
                </form>
            )
        case 'LRSETX':
        case 'UDSETX':
            return (
                <form onSubmit={submit}>
                    <input type='text' placeholder='Enter character of carriage to set' autoFocus/><br/>
                    <input type='text' placeholder='Enter number to take value from'/><br/>
                    <input type="submit"/>
                </form>
            )
        case 'LRPLUS':
        case 'UDPLUS':
        case 'LRMINUS':
        case 'UDMINUS':
            return (
                <form onSubmit={submit}>
                    <input type='text' placeholder='Enter first carriage' autoFocus/><br/>
                    <input type='text' placeholder='Enter second carriage'/><br/>
                    <input type='text' placeholder='Enter carriage where the result should go'/><br/>
                    <input type="submit"/>
                </form>
            )
        default:
            return null
    }
}

export default getBuildModal
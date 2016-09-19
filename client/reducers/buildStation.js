const buildStation = (type, id) => {
    console.log({type,id})
    switch(type){
        case 'LR':
        case 'UD':
        case 'RU':
        case 'UL':
        case 'LD':
        case 'DR':
            return {type, id: 0}
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
            const idT = id.charCodeAt(0) - 65
            if(idT < 0 || idT >= 11 || id.length != 1){
                return {error: true}
            }
            return {type, id: idT}
        case 'ERASER':
            return null
        default:
            return {error: true}
    }
}

export default buildStation
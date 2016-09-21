const buildStation = (type, id) => {
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
        {
            const idT = id[0].toUpperCase().charCodeAt(0) - 65
            if(idT < 0 || idT >= 11 || id[0].length != 1){
                return {error: true}
            }
            return {type, id: idT}
        }
        case 'LRSETX':
        case 'UDSETX':
        {
            const idFrom = id[1].toUpperCase().charCodeAt(0) - 65
            if(idFrom < 0 || idFrom >= 11 || id[0].length != 1){
                return {error: true}
            }
            const idTo = id[0].toUpperCase().charCodeAt(0) - 65
            if(idTo < 0 || idTo >= 11 || id[0].length != 1){
                return {error: true}
            }
            return {
                type,
                id:{
                    vagonFrom: idFrom,
                    vagonTo: idTo
                }
            }
        }
        case 'LRMINUS':
        case 'UDMINUS':
        case 'LRPLUS':
        case 'UDPLUS':
        {
            const idA = id[0].toUpperCase().charCodeAt(0) - 65
            if(idA < 0 || idA >= 11 || id[0].length != 1){
                return {error: true}
            }
            const idB = id[1].toUpperCase().charCodeAt(0) - 65
            if(idB < 0 || idB >= 11 || id[1].length != 1){
                return {error: true}
            }
            const idTo = id[2].toUpperCase().charCodeAt(0) - 65
            if(idTo < 0 || idTo >= 11 || id[2].length != 1){
                return {error: true}
            }
            return {
                type,
                id:{
                    vagonFromA: idA,
                    vagonFromB: idB,
                    vagonTo: idTo
                }
            }
        }    
        case 'ERASER':
            return null
        default:
            return {error: true}
    }
}

export default buildStation
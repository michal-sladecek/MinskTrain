export const LRPlusOne = {
    group: 'stations',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'L': 
                changeNum(id,vagons[id]+1)
                return 'R'
            case 'R':
                changeNum(id,vagons[id]+1)
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }
}
export const UDPlusOne = {
    group: 'stations',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'U': 
                changeNum(id,vagons[id]+1)
                return 'D'
            case 'D':
                changeNum(id,vagons[id]+1)
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }
}

export const LRMinusOne = {
    group: 'stations',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'L': 
                changeNum(id, Math.max(0, vagons[id]-1))
                return 'R'
            case 'R':
                changeNum(id, Math.max(0, vagons[id]-1))
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }
}
export const UDMinusOne = {
    group: 'stations',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'U': 
                changeNum(id, Math.max(0, vagons[id]-1))
                return 'D'
            case 'D':
                changeNum(id, Math.max(0, vagons[id]-1))
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }
}

export const LRSetX = {
    group: 'setters',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'L': 
                changeNum(id.vagonTo,vagons[id.vagonFrom])
                return 'R'
            case 'R':
                changeNum(id.vagonTo,vagons[id.vagonFrom])
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const UDSetX = {
    group: 'setters',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'U': 
                changeNum(id.vagonTo,vagons[id.vagonFrom])
                return 'D'
            case 'D':
                changeNum(id.vagonTo,vagons[id.vagonFrom])
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const LRPlus = {
    group: 'plusminus',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'L': 
                changeNum(id.vagonTo,vagons[id.vagonFromA] + vagons[id.vagonFromB])
                return 'R'
            case 'R':
                changeNum(id.vagonTo,vagons[id.vagonFromA] + vagons[id.vagonFromB])
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const UDPlus = {
    group: 'plusminus',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'U': 
                changeNum(id.vagonTo,vagons[id.vagonFromA] + vagons[id.vagonFromB])
                return 'D'
            case 'D':
                changeNum(id.vagonTo,vagons[id.vagonFromA] + vagons[id.vagonFromB])
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const LRMinus = {
    group: 'plusminus',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'L': 
                changeNum(id.vagonTo, Math.max(0, vagons[id.vagonFromA] - vagons[id.vagonFromB]))
                return 'R'
            case 'R':
                changeNum(id.vagonTo, Math.max(0, vagons[id.vagonFromA] - vagons[id.vagonFromB]))
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const UDMinus = {
    group: 'plusminus',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'U': 
                changeNum(id.vagonTo, Math.max(0, vagons[id.vagonFromA] - vagons[id.vagonFromB]))
                return 'D'
            case 'D':
                changeNum(id.vagonTo, Math.max(0, vagons[id.vagonFromA] - vagons[id.vagonFromB]))
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const LRMul = {
    group: 'muldivmod',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'L': 
                changeNum(id.vagonTo,vagons[id.vagonFromA] * vagons[id.vagonFromB])
                return 'R'
            case 'R':
                changeNum(id.vagonTo,vagons[id.vagonFromA] * vagons[id.vagonFromB])
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const UDMul = {
    group: 'muldivmod',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        switch(fromDirection){
            case 'U': 
                changeNum(id.vagonTo,vagons[id.vagonFromA] * vagons[id.vagonFromB])
                return 'D'
            case 'D':
                changeNum(id.vagonTo,vagons[id.vagonFromA] * vagons[id.vagonFromB])
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const LRDiv = {
    group: 'muldivmod',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        if(vagons[id.vagonFromB]===0) return 'BAD_OPERATION'
        switch(fromDirection){
            case 'L': 
                changeNum(id.vagonTo,Math.floor(vagons[id.vagonFromA] / vagons[id.vagonFromB]))
                return 'R'
            case 'R':
                changeNum(id.vagonTo,Math.floor(vagons[id.vagonFromA] / vagons[id.vagonFromB]))
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const UDDiv = {
    group: 'muldivmod',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        if(vagons[id.vagonFromB]===0) return 'BAD_OPERATION'
        switch(fromDirection){
            case 'U': 
                changeNum(id.vagonTo,Math.floor(vagons[id.vagonFromA] / vagons[id.vagonFromB]))
                return 'D'
            case 'D':
                changeNum(id.vagonTo,Math.floor(vagons[id.vagonFromA] / vagons[id.vagonFromB]))
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const LRMod = {
    group: 'muldivmod',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        if(vagons[id.vagonFromB]===0) return 'BAD_OPERATION'
        switch(fromDirection){
            case 'L': 
                changeNum(id.vagonTo,vagons[id.vagonFromA] % vagons[id.vagonFromB])
                return 'R'
            case 'R':
                changeNum(id.vagonTo,vagons[id.vagonFromA] % vagons[id.vagonFromB])
                return 'L'
            default:
                return 'BAD_OPERATION'
        }
    }  
}

export const UDMod = {
    group: 'muldivmod',
    type: 'node',
    action: (fromDirection, vagons, id, changeNum) => {
        if(vagons[id.vagonFromB]===0) return 'BAD_OPERATION'
        switch(fromDirection){
            case 'U': 
                changeNum(id.vagonTo,vagons[id.vagonFromA] % vagons[id.vagonFromB])
                return 'D'
            case 'D':
                changeNum(id.vagonTo,vagons[id.vagonFromA] % vagons[id.vagonFromB])
                return 'U'
            default:
                return 'BAD_OPERATION'
        }
    }  
}
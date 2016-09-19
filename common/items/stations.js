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
                changeNum(id,vagons[id]-1)
                return 'R'
            case 'R':
                changeNum(id,vagons[id]-1)
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
                changeNum(id,vagons[id]-1)
                return 'D'
            case 'D':
                changeNum(id,vagons[id]-1)
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
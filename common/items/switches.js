export const DRUswitch = {
    group: 'switches',
    type: 'node',
    action: (fromDirection, vagons, id) => {
        switch(fromDirection){
            case 'D': 
                if(vagons[id]===0)
                    return 'U'
                else    
                    return 'R'
            case 'U': return 'D'
            case 'R': return 'D'
            default: return 'BAD_OPERATION'
        }
    }
}
export const LDRswitch = {
    group: 'switches',
    type: 'node',
    action: (fromDirection, vagons, id) => {
        switch(fromDirection){
            case 'L': 
                if(vagons[id]===0)
                    return 'R'
                else    
                    return 'D'
            case 'D': return 'L'
            case 'R': return 'L'
            default: return 'BAD_OPERATION'
        }
    }
}
export const RULswitch = {
    group: 'switches',
    type: 'node',
    action: (fromDirection, vagons, id) => {
        switch(fromDirection){
            case 'R': 
                if(vagons[id]===0)
                    return 'L'
                else    
                    return 'U'
            case 'U': return 'R'
            case 'L': return 'R'
            default: return 'BAD_OPERATION'
        }
    }
} 
export const ULDswitch = {
    group: 'switches',
    type: 'node',
    action: (fromDirection, vagons, id) => {
        switch(fromDirection){
            case 'U': 
                if(vagons[id]===0)
                    return 'D'
                else    
                    return 'L'
            case 'L': return 'U'
            case 'D': return 'U'
            default: return 'BAD_OPERATION'
        }
    }
}
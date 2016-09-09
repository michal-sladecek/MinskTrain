export const LRrails = {
    group: 'rails',
    type: 'edge',
    action: (fromDirection) => {
        switch(fromDirection){
            case 'L': return 'R'
            case 'R': return 'L'
            default: return 'BAD_OPERATION'
        }
    }
}
export const UDrails = {
    group: 'rails',
    type: 'edge',
    action: (fromDirection) => {
        switch(fromDirection){
            case 'U': return 'D'
            case 'D': return 'U'
            default: return 'BAD_OPERATION'
        }
    }
}
export const RUrails = {
    group: 'rails',
    type: 'edge',
    action: (fromDirection) => {
        switch(fromDirection){
            case 'R': return 'U'
            case 'U': return 'R'
            default: return 'BAD_OPERATION'
        }
    }
}
export const ULrails = {
    group: 'rails',
    type: 'edge',
    action: (fromDirection) => {
        switch(fromDirection){
            case 'L': return 'U'
            case 'U': return 'L'
            default: return 'BAD_OPERATION'
        }
    }
}
export const LDrails = {
    group: 'rails',
    type: 'edge',
    action: (fromDirection) => {
        switch(fromDirection){
            case 'L': return 'D'
            case 'D': return 'L'
            default: return 'BAD_OPERATION'
        }
    }
}
export const DRrails = {
    group: 'rails',
    type: 'edge',
    action: (fromDirection) => {
        switch(fromDirection){
            case 'R': return 'D'
            case 'D': return 'R'
            default: return 'BAD_OPERATION'
        }
    }
}
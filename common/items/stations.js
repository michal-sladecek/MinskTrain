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
                return 'D'
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
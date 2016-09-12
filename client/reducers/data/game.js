//  U
// L R 
//  D
import levelsDefault from './levels'
let map = []
for(let i=0;i<15;++i){
    map.push([])
    for(let j=0;j<20;j++){
        map[i].push(null)
    }
}

let carriage = Array.apply(null, Array(11)).map(function () { return 0; })
const defaultGame = {

    tools: {
        
        'rails': ['LR', 'UD', 'RU', 'UL', 'LD', 'DR'],
        'switches': ['DRU','LDR','RUL','ULD', 'DLU', 'LUR', 'RDL', 'URD'],
        'helpers': ['ERASER'],
        'stations': ['UDPLUSONE', 'LRPLUSONE', 'LRMINUSONE', 'UDMINUSONE']
    },
    notAskId: ['LR', 'UD', 'RU', 'UL', 'LD', 'DR', 'ERASER'],
    currentTool: 'LR',
    map: map,
    levels: levelsDefault,
    train:{
        carriage,
        nextStop:{x:0,y:0},
        coord: {x:0,y:0}
    },
    mode: 'stopped',
    animation:{
        str: "",
        speed: 0.5
    }
}

export default defaultGame
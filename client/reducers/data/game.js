//  U
// L R 
//  D
import levelsDefault from '../../../common/levels'
import * as speedLevels from '../../consts/speedLevels'

let map = []
for(let i=0;i<15;++i){
    map.push([])
    for(let j=0;j<20;j++){
        map[i].push(null)
    }
}

let carriage = Array.apply(null, Array(11)).map(function () { return 0; })
let origCarriage = Array.apply(null, Array(11)).map(function () { return 0; })
const defaultGame = {

    tools: {
        'rails': ['LR', 'UD', 'RU', 'UL', 'LD', 'DR'],
        'stations': ['UDPLUSONE', 'LRPLUSONE', 'LRMINUSONE', 'UDMINUSONE'],
        'switches': ['DRU','LDR','RUL','ULD', 'DLU', 'LUR', 'RDL', 'URD'],
        'setters': ['LRSETX', 'UDSETX'],
        'helpers': ['ERASER']
    },
    notAskId: ['LR', 'UD', 'RU', 'UL', 'LD', 'DR', 'ERASER'],
    currentTool: 'LR',
    map: map,
    levels: levelsDefault,
    train:{
        carriage,
        origCarriage,
        nextStop:{x:0,y:0},
        coord: {x:0,y:0},
        notify: {id:''}
    },
    mode: 'stopped',
    animation:{
        str: "",
        speed: speedLevels.NORMAL
    },
    fetching: false,
    curLevel: -1
}

export default defaultGame
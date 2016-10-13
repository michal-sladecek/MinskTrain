//  U
// L R 
//  D
import levelsDefault from '../../../common/levels'
import * as speedLevels from '../../consts/speedLevels'
import env from '../../../env'
let map = []
for(let i=0;i<env.gameHeight;++i){
    map.push([])
    for(let j=0;j<env.gameWidth;j++){
        map[i].push(null)
    }
}

let carriage = Array.apply(null, Array(11)).map(function () { return 0; })
let origCarriage = Array.apply(null, Array(11)).map(function () { return 0; })
let levels = levelsDefault.map((val,i) => {
    val.solved = false
    return val
})
const defaultGame = {
    clientId: 'ejoneron34ojr834fnoercn0er3fn04fn30oncd0',
    tools: {
        'rails': ['LR', 'UD', 'RU', 'UL', 'LD', 'DR'],
        'stations': ['UDPLUSONE', 'LRPLUSONE', 'LRMINUSONE', 'UDMINUSONE'],
        'switches': ['DRU','LDR','RUL','ULD', 'DLU', 'LUR', 'RDL', 'URD'],
        'setters': ['LRSETX', 'UDSETX'],
        'plusminus': ['LRPLUS', 'UDPLUS', 'LRMINUS', 'UDMINUS'],
        'muldivmod': ['LRMUL','UDMUL', 'LRDIV', 'UDDIV', 'LRMOD', 'UDMOD'],
        'helpers': ['ERASER']
    },
    notAskId: ['LR', 'UD', 'RU', 'UL', 'LD', 'DR', 'ERASER'],
    currentTool: 'LR',
    map,
    levels,
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
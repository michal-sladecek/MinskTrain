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
let carriage = Array.apply(null, Array(12)).map(function () { return 0; })
const defaultGame = {
    tools: {
        'rails': ['LR', 'UD', 'RU', 'UL', 'LD', 'DR'],
        'switches': ['DRU','LDR','RUL','ULD'],
        'helpers': ['ERASER'],
    },
    currentTool: 'LR',
    map: map,
    levels: levelsDefault,
    train:{
        carriage
    },
    mode: 'stopped'
}

export default defaultGame
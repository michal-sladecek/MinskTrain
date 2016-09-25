import cases from '../levelsTestCases/cases.js'
import levels from './levels'
import items from './items/items'
import {processToNextNode} from './compile'

const testSolution = function(map, curLevel){
    for(var i=0;i<map.length;++i){
        for(var j=0;j<map[i].length;++j){
            if(map[i][j]){
                console.log(levels[curLevel])
                if(levels[curLevel].allowed.indexOf(items[map[i][j].type].group) == -1){
                    return {ok:false, reason:'NOT_ALLOWED', failure: cases[0]}
                }
            }
        }
    }
    for(var i=0;i<cases.length;++i){
        const originalTrain = cases[i]
        let trainCopy = originalTrain.slice()
        var start = new Date().getTime()
        let coord = {x:0, y:0}
        let dir = 'L'
        let ending = false
        while(new Date().getTime() - start < 3000) {
            const next = processToNextNode(map,dir, trainCopy, (id,val)=>{trainCopy[id]=val}, coord)
            if(next.error){
                return {ok:false, reason:next.error, failure: originalTrain}
            }
            if(next.ending){
                break
            }
            coord = next.coord
            dir = next.direction
        }
        if(coord.x === 14 && coord.y === 20){
            if(levels[curLevel].checker(originalTrain, trainCopy)){
                continue
            }
        }
        return {ok:false, reason:'FAILURE', failure: originalTrain}
    }
    return {ok:true}
}

export default testSolution
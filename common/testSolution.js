import cases from '../levelsTestCases/cases.js'
import levels from './levels'
import {processToNextNode} from './compile'
const testSolution = function(map, curLevel){
    for(var i=0;i<cases.length;++i){
        const originalTrain = cases[i]
        let trainCopy = originalTrain.slice()
        var start = new Date().getTime()
        let coord = {x:0, y:0}
        let dir = 'L'
        let ending = false
        while(new Date().getTime() - start < 10000) {
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
        if(new Date().getTime() - start > 10000){
            return {ok:false, reason:'TLE', failure:originalTrain}
        }
        if(coord.x === 14 && coord.y === 20){
            if(levels[curLevel].checker(originalTrain, trainCopy)){
                continue
            }
        }
        return {ok:false, reason:'WA', failure: originalTrain}
    }
    return {ok:true}
}

export default testSolution
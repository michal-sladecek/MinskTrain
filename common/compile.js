import items from './items/items'

const directionsRev = {
    'U' : 'D',
    'R' : 'L',
    'D' : 'U',
    'L' : 'R'
}

export const getNextNode = (map, direction, coord) => {
    let curx = coord.x
    let cury = coord.y
    let animationStr = ''
    if(map[curx][cury]){   
        let cur = map[curx][cury].type  
        while(cur && items[cur].type != 'node'){     
            direction = items[cur].action(direction)
            switch(direction){
                case 'U':
                    curx -= 1
                    break
                case 'D':
                    curx += 1
                    break
                case 'R':
                    cury += 1
                    break
                case 'L':
                    cury -= 1
                    break
                case 'BAD_OPERATION':
                    return {error:'BAD_OPERATION', animationStr}
            }
            animationStr +=direction
            direction = directionsRev[direction]
            if(curx < 0 || cury < 0 || curx >= map.length || cury >= map[curx].length){
                return {coord: {x:curx, y:cury}, animationStr, direction}
            }
            if(map[curx][cury])
                cur = map[curx][cury].type
            else
                return {error:'BAD_OPERATION', animationStr}
        }
        if(!cur){
            return {error: 'BAD_OPERATION'}
        } else{
            return {coord: {x:curx, y:cury}, direction, animationStr}
        }
    }else{
        return {error: 'BAD_OPERATION'}
    }
}

//changeNumber(vagon, num) is either dispatcher with action (client) or changing the number in array (server)
//
export const processNode = (station, direction, train, changeNumber) => {
    return items[station.type].action(direction, train, station.id, changeNumber)
}
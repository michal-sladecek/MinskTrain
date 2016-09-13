import items from './items/items'

const directionsRev = {
    'U' : 'D',
    'R' : 'L',
    'D' : 'U',
    'L' : 'R'
}

const directions = {
    'U' : {x:-1, y:0},
    'D' : {x:1, y:0},
    'R' : {x:0, y:1},
    'L' : {x:0, y:-1}
}

export const getNextNode = (map, direction, coord) => {
    let curx = coord.x
    let cury = coord.y
    if(curx < 0 || cury < 0 || curx >= map.length || cury >= map[curx].length){
        return {coord: {x:curx, y:cury}, animationStr, direction}
    }
    let animationStr = ''
    if(map[curx][cury]){   
        let cur = map[curx][cury].type  
        while(cur && items[cur].type != 'node'){
            direction = items[cur].action(direction)
            if(direction == 'BAD_OPERATION'){
                return {error:'BAD_OPERATION', animationStr} 
            }
            curx += directions[direction].x
            cury += directions[direction].y
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

export const processToNextNode = (map, direction, train, changeNumber, coord) => {
    if(coord.x < 0 || coord.y < 0 || coord.x >= map.length || coord.y >= map[coord.x].length){
        return {ending: true}
    }
    if(map[coord.x][coord.y]){
        const station = map[coord.x][coord.y]
        if(!items[station.type]) throw {error:"Undefined item", info:{stationType: station.type}}
        if(items[station.type].type == 'node'){
            let dir = processNode(station, direction, train, changeNumber)
            if(dir == 'BAD_OPERATION') return {error: 'BAD_OPERATION'}
            let nextNode =  getNextNode(map, directionsRev[dir], 
                {x:coord.x + directions[dir].x,
                y:coord.y + directions[dir].y}
             )
             if(nextNode.error){
                 return {...nextNode, animationStr: dir}
             }
             nextNode.animationStr = dir + nextNode.animationStr
             return nextNode
        }
        else {
            return getNextNode(map, direction, coord)
        }
    } else{
        return {error:'BAD_OPERATION'}
    }
}
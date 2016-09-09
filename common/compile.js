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
            console.log(direction)
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
                    return 'BAD_OPERATION'
            }
            animationStr +=direction
            direction = directionsRev[direction]
            if(curx < 0 || cury < 0 || curx >= 15 || cury >= 20){
                return {x:-1,y:-1}
            }
            if(map[curx][cury])
                cur = map[curx][cury].type
            else
                return 'BAD_OPERATION'
        }
        if(!cur){
            return 'BAD_OPERATION'
        } else{
            return {coord: {x:curx, y:cury}, direction, animationStr}
        }
    }else{
        return 'BAD_OPERATION'
    }
}
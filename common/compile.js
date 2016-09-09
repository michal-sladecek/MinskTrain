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
    if(map[curx][cury]){   
        let cur = map[curx][cury].type  
        while(cur && items[cur].type != 'node'){     
            console.log({cur, curx, cury})
            direction = items[cur].action(direction)
            switch(direction){
                case 'U':
                    curx -= 1
                    break
                case 'D':
                    curx += 1
                    break
                case 'R':
                    cury -= 1
                    break
                case 'L':
                    cury += 1
                    break
            }
            direction = directionsRev[direction]
            if(curx < 0 || cury < 0 || curx >= 15 || cury >= 20){
                return {x:-1,y:-1}
            }
            cur = map[curx][cury]
        }
        if(!cur){
            return 'BAD_OPERATION'
        } else{
            return coord
        }
    }else{
        return 'BAD_OPERATION'
    }
}
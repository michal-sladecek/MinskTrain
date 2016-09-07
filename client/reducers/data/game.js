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
const defaultGame = {
    tools: [
        [
            {
                id: 'LR',
                img: '/static/img/LRrail.jpg'
            },
            {
                id: 'UD',
                img: '/static/img/UDRail.jpg'
            },
            {
                id: 'RU',
                img: '/static/img/LRrail.jpg'
            },
            {
                id: 'UL',
                img: '/static/img/UDRail.jpg'
            },
            {
                id: 'LD',
                img: '/static/img/LRrail.jpg'
            },
            {
                id: 'DR',
                img: '/static/img/UDRail.jpg'
            }
        ],
        [
            {
                id: 'DRU',
                img: '/static/img/DRU.jpg'
            },
            {
                id: 'LDR',
                img: '/static/img/LDR.jpg'
            },
            {
                id: 'RUL',
                img: '/static/img/RUL.jpg'
            },
            {
                id: 'ULD',
                img: '/static/img/ULD.jpg'
            }
        ],
        [
            {
                id: 'ERASER',
                img: '/static/img/erase.jpg'
            }
        ],
    ],
    currentTool: {
        group: 0,
        index: 0
    },
    map: map,
    levels: levelsDefault
}

export default defaultGame
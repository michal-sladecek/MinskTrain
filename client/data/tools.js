//  U
// L R 
//  D
const tools = {
    tools: [
        [
            {
                id: 'LR',
                img: '/static/img/LRrail.jpg'
            },
            {
                id: 'UD',
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
    }
}

export default tools
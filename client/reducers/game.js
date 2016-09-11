import * as actions from '../consts/actions'
import defaultGame from './data/game'
import {processToNextNode} from '../../common/compile'

const game = (state=defaultGame, action) => {
    switch(action.type){
        case actions.USE_TOOL:
            if(state.mode != 'stopped'){
                return state
            }
            const x = action.coord.x
            const y = action.coord.y
            if(state.currentTool === 'ERASER'){
                return {
                    ...state,
                    map: [...state.map.slice(0, action.coord.x),
                        [
                            ...state.map[x].slice(0,action.coord.y),
                            null,
                            ...state.map[x].slice(action.coord.y+1)
                        ], ...state.map.slice(action.coord.x+1)]
                }
            }else{
                return {
                    ...state,
                    map: [...state.map.slice(0, action.coord.x),
                        [
                            ...state.map[x].slice(0,action.coord.y),
                            {type: state.currentTool, id: 1},
                            ...state.map[x].slice(action.coord.y+1)
                        ], ...state.map.slice(action.coord.x+1)]
                }
            }
            return newState
        case actions.CHANGE_TOOL:
            return {
                ...state,
                currentTool: action.toolId
            }
        case actions.CHANGE_NUMBER:
            let number = parseInt(action.num)
            if(isNaN(number)){
                return Object.assign({},state)
            }
            if(number > 99 || number < 0){
                return Object.assign({},state)
            }
            return {
                ...state,
                train:{
                    ...state.train,
                    carriage: [
                    ...state.train.carriage.slice(0, action.vagon),
                    number,
                    ...state.train.carriage.slice(action.vagon + 1)
                    ]
                }
            }
        case actions.PLAY: {
            let changeNumber = null
            let process = processToNextNode(state.map, 'L', state.train.carriage, (id, num) => { changeNumber = { id, num } }, { x: 0, y: 0 })
            return {...state,
                mode: 'running',
                animation: {
                        ...state.animation,
                    str: process.animationStr
                },
                train: {
                        ...state.train,
                    coord: { x: 0, y: 0 },
                    fromDirection: process.direction,
                    nextStop: process.coord
                }
            }
        }
        case actions.STATION:
        {
            let changeNumber = null
            if(state.train.nextStop.x < 0 || state.train.nextStop.x > 15 || state.train.nextStop.y < 0 || state.train.nextStop.y>20){
                return {
                    ...state,
                    animation: {
                        ...state.animation,
                        str: ""
                    },
                    train: {
                        ...state.train,
                        coord: {x:0,y:0},
                        nextStop: {x:0,y:0}
                    },
                    mode: 'stopped'
                }
            }
            let process = processToNextNode(state.map,state.train.fromDirection,state.train.carriage,
                (id,num)=>{changeNumber={id,num}}, state.train.nextStop)
            console.log(changeNumber)
            console.log(process)
            if(changeNumber){
                return {...state, 
                    animation: {
                        ...state.animation,
                        str: process.animationStr
                    },
                    train: {
                        ...state.train,
                        carriage: [
                            ...state.train.carriage.slice(0,changeNumber.id),
                            changeNumber.num,
                            ...state.train.carriage.slice(changeNumber.id+1)
                        ]
                        ,
                        coord: state.train.nextStop,
                        nextStop: process.coord,
                        fromDirection: process.direction
                    }
                 }
            }else {
                return {...state, 
                    animation: {
                        ...state.animation,
                        str: process.animationStr
                    },
                    train: {
                        ...state.train,
                        coord: state.train.nextStop,
                        nextStop: process.coord,
                        fromDirection: process.direction
                    }
                 }
            }
        }
        case actions.STOP:
            return {
                    ...state,
                    animation: {
                        ...state.animation,
                        str: ""
                    },
                    train: {
                        ...state.train,
                        coord: {x:0,y:0},
                        nextStop: {x:0,y:0}
                    },
                    mode: 'stopped'
                }
        default:
            return state
    }
}

export default game
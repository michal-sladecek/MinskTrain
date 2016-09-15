import * as actions from '../consts/actions'
import defaultGame from './data/game'
import {processToNextNode} from '../../common/compile'

const resetTrain = (state) => {
    return {
        ...state,
        animation: {
            ...state.animation,
            str: "",
            speed: 0.5
        },
        train: {
            ...state.train,
            coord: { x: 0, y:0 },
            nextStop: { x: 0, y:0 },
            fromDirection: 'L'
        },
        mode: 'stopped'
    }
}
const moveTrain = (state) => {
    let changeNumber = {id: 0,num: state.train.carriage[0]}
    let process = processToNextNode(state.map, state.train.fromDirection, state.train.carriage,
                (id,num)=>{changeNumber={id,num}}, state.train.nextStop)
    if(process.ending){
        return {...resetTrain(state)}
    }
    if(process.error){
        const reseted = resetTrain(state)
        return {...reseted, train: {...reseted.train, notify: process.error}}
    }
    return {
        ...state, 
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
            ],
            coord: state.train.nextStop,
            nextStop: process.coord,
            fromDirection: process.direction
        }
    }
}

const game = (state=defaultGame, action) => {
    switch(action.type){
        case actions.USE_TOOL:
            if(state.mode != 'stopped'){
                return state
            }
            const x = action.coord.x
            const y = action.coord.y
            const id = action.id.charCodeAt(0) - 65
            if(id < 0 || id >= state.train.carriage.length){
                return {
                    ...state,
                    train: {
                        ...state.train,
                        notify: 'NO_SUCH_INDICE'
                    }
                }
            }
            return {
                ...state,
                map: [
                    ...state.map.slice(0, action.coord.x),
                    [
                        ...state.map[x].slice(0,action.coord.y),
                        (state.currentTool === 'ERASER')? null : {type: state.currentTool, id},
                        ...state.map[x].slice(action.coord.y+1)
                    ],
                    ...state.map.slice(action.coord.x+1)
                ]
            }
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
        case actions.PLAY: 
            if(state.mode === 'running'){
                return {...state, animation: {...state.animation, speed:0.5}}
            }
            const moved = moveTrain({...resetTrain(state)})
            return {...moved, mode: (moved.train.error)?'stopped':'running'}
        case actions.STATION:
           return moveTrain(state)
        case actions.STOP:
            return {...resetTrain(state), mode: 'stopped'}
        case actions.PAUSE:
            return {
                ...state,
                animation: {
                    ...state.animation,
                    speed: 100000
                }
            }
        case actions.FORWARD:
            return {
                ...state,
                animation: {
                    ...state.animation,
                    speed: 0.2
                }
            }
        case actions.FAST:
            return {
                ...state,
                animation: {
                    ...state.animation,
                    speed: 0.05
                }
            }
        case actions.CLEAR_NOTIFY:
            return {
                ...state,
                train:{
                    ...state.train,
                    notify: ''
                }
            }
        case actions.SET_LEVEL:
            return {
                ...state,
                curLevel: action.id
            }
        default:
            return state
    }
}

export default game
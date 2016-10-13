import * as actions from '../consts/actions'
import * as speedLevels from '../consts/speedLevels'

import defaultGame from './data/game'
import {processToNextNode} from '../../common/compile'
import buildStation from './buildStation'
import env from '../../env'
const resetTrain = (state) => {
    return {
        ...state,
        animation: {
            ...state.animation,
            str: "",
            speed: speedLevels.NORMAL
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

const checkLevelDone = (state) => {
    if(state.train.nextStop.x !== env.gameHeight - 1 || state.train.nextStop.y !== env.gameWidth) return false
    const id = state.curLevel
    const check = state.levels[id].checker
    return check(state.train.origCarriage, state.train.carriage)
}
const moveTrain = (state) => {
    let changeNumber = {id: 0,num: state.train.carriage[0]}
    let process = processToNextNode(state.map, state.train.fromDirection, state.train.carriage,
                (id,num)=>{changeNumber={id,num}}, state.train.nextStop)
    if(process.error){
        const reseted = resetTrain(state)
        return {...reseted, train: {...reseted.train, notify: {id:process.error}}}
    }
    if(process.ending){
        const reseted = resetTrain(state)
        let status = ''
        if(checkLevelDone(state)){
            status = 'SUCCESS'
        } else {
            status = 'FAILURE'
        }
        return {...reseted, train: {...reseted.train, notify: {id:status}}}
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
            const station = buildStation(state.currentTool, action.id)
            if(station!=null && station.error){
                return state
            }
            return {
                ...state,
                map: [
                    ...state.map.slice(0, action.coord.x),
                    [
                        ...state.map[x].slice(0,action.coord.y),
                        station,
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
            if(number > env.maxTrainNum || number < 0){
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
                return {...state, animation: {...state.animation, speed:speedLevels.NORMAL}}
            }
            const moved = moveTrain({...resetTrain(state)})
            return {...moved, train: {...moved.train, origCarriage: state.train.carriage} ,mode: (moved.train.notify.id)?'stopped':'running'}
        case actions.RESET:
            return ({...state, train: {...state.train, carriage: state.train.origCarriage}})
        case actions.STATION:
           return moveTrain(state)
        case actions.STOP:
            return {...resetTrain(state), mode: 'stopped'}
        case actions.PAUSE:
            return {
                ...state,
                animation: {
                    ...state.animation,
                    speed: speedLevels.PAUSE
                }
            }
        case actions.FORWARD:
            return {
                ...state,
                animation: {
                    ...state.animation,
                    speed: speedLevels.FORWARD
                }
            }
        case actions.FAST:
            return {
                ...state,
                animation: {
                    ...state.animation,
                    speed: speedLevels.FAST
                }
            }
        case actions.CLEAR_NOTIFY:
            return {
                ...state,
                train:{
                    ...state.train,
                    notify:{id: ''}
                }
            }
        case actions.SET_LEVEL:
            return {
                ...state,
                curLevel: action.id
            }
        case actions.FETCHING_STATUS:
            return {
                ...state,
                fetching: true
            }
        case actions.GOT_STATUS:
            return {
                ...state,
                fetching:false,
                train:{
                    ...state.train,
                    notify: {id: 'SERVER', ...action.status}
                }
            }
        case actions.SHOW_HELP:
            return {
                ...state,
                train: {
                    ...state.train,
                    notify: {id: 'HELP'}
                }
            }
        case actions.SET_TRAIN:
            return {
                ...state,
                train: {
                    ...state.train,
                    carriage: action.newVagons,
                }
            }
        case actions.GOT_SOLVED_LEVELS:
            var newLevels = state.levels
            const solved = action.solved
            var newLevels = state.levels.slice()
            for(var i = 0; i < newLevels.length; ++i) {
                newLevels[i].solved = false
            }
            for(var i = 0; i < solved.length; ++i) {
                newLevels[solved[i]].solved = true
            }
            return {
                ...state,
                levels: newLevels
            }
        case actions.CHANGE_ID:
            return {
                ...state,
                clientId: action.id
            }
        default:
            return state
    }
}

export default game
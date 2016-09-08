import * as actions from '../consts/actions'
import defaultGame from './data/game'

const game = (state=defaultGame, action) => {
    switch(action.type){
        case actions.USE_TOOL:
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
                            {type: state.currentTool},
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
        case actions.PLAY:
             return {...state, playing: 'running'}
        case actions.FORWARD:
            return {...state, playing: 'forwarding'}
        case actions.FAST:
            return {...state, playing: 'fast'}
        case actions.PAUSE:
            return {...state, playing: 'paused'}
        case actions.STOP:
            return {...state, playing: 'stopped'}
        default:
            return state
    }
}

export default game
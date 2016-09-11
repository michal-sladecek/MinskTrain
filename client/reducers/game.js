import * as actions from '../consts/actions'
import defaultGame from './data/game'
import {getNextNode} from '../../common/compile'

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
                            {type: state.currentTool, id: 0},
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
            console.log(getNextNode(state.map, 'L', {x:0,y:0}))
            return {...state, mode: 'running'}
        case actions.STOP:
            return {...state, mode: 'stopped'}
        default:
            return state
    }
}

export default game
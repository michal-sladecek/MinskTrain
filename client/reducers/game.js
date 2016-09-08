import {CHANGE_TOOL, USE_TOOL, CHANGE_NUMBER} from '../consts/actions'
import defaultGame from './data/game'

const game = (state=defaultGame, action) => {
    switch(action.type){
        case USE_TOOL:
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
        case CHANGE_TOOL:
            return {
                ...state,
                currentTool: action.toolId
            }
        case CHANGE_NUMBER:

        default:
            return state
    }
}

export default game
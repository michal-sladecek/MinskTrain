import {CHANGE_TOOL, USE_TOOL} from '../consts/actions'
import defaultGame from './data/game'

const game = (state=defaultGame, action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case USE_TOOL:
            let newState = Object.assign({}, state)
            console.log(newState)
            if(state.tools[state.currentTool.group][state.currentTool.index].id === 'ERASER'){
                newState.map[action.coord.x][action.coord.y] = undefined
            }else{
                newState.map[action.coord.x][action.coord.y] = state.currentTool
            }
            return newState
        case CHANGE_TOOL:
            return {
                ...state,
                currentTool:{
                    group: action.group,
                    index: action.id
                }
            }
        default:
            return state
    }
}

export default game
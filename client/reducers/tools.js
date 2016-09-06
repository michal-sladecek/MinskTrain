import {CHANGE_TOOL} from '../consts/actions'

const tools = (state=[], action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
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

export default tools
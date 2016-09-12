import {CHANGE_TOOL, USE_TOOL} from '../consts/actions.js'

export function changeTool(toolId){
    return {
        type: CHANGE_TOOL,
        toolId
    }
}

export function useTool(coord, id){
    if(!id) id = 'A'
    return {
        type: USE_TOOL,
        coord,
        id
    }
}
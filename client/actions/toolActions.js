import {CHANGE_TOOL, USE_TOOL} from '../consts/actions.js'

export function changeTool(group, id){
    return {
        type: CHANGE_TOOL,
        group: group,
        id: id
    }
}

export function useTool(coord){
    return {
        type: USE_TOOL,
        coord
    }
}
import {CHANGE_TOOL} from '../consts/actions.js'

export function changeTool(group, id){
    console.log('Returning action')
    return {
        type: CHANGE_TOOL,
        group: group,
        id: id
    }
}
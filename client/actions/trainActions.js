import {CHANGE_NUMBER} from '../consts/actions'
export function changeNumber(vagon, num){
    return {
        type: CHANGE_NUMBER,
        vagon,
        num,
    }
}


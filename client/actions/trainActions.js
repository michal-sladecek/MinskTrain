import * as actions from '../consts/actions'
export function changeNumber(vagon, num){
    return {
        type: actions.CHANGE_NUMBER,
        vagon,
        num
    }
}

export function station(){
    return {
        type: actions.STATION,
    }
}
export function play(){
    return {
        type: actions.PLAY
    }
}
export function forward(){
    return {
        type: actions.FORWARD
    }
}
export function fast(){
    return {
        type: actions.FAST
    }
}
export function pause(){
    return {
        type: actions.PAUSE
    }
}
export function stop(){
    return {
        type: actions.STOP
    }
}

export function clearNotify(){
    return {
        type: actions.CLEAR_NOTIFY
    }
}

import {CHANGE_TOOL} from '../consts/actions'

const tools = (state=[], action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        default:
            return state
    }
}

export default tools
import * as actions from '../consts/actions'
import * as urls from '../../common/urls'
function fetchingStatus(){
    return {
        type: actions.FETCHING_STATUS
    }
}
function gotStatus(status){
    return {
        type:actions.GOT_STATUS,
        status, 
    }
}

export function sendLevel() {
  return function (dispatch, getState) {
      const state = getState().game
      const jsonMap = JSON.stringify({map: state.map, curLevel: state.curLevel})
      dispatch(fetchingStatus())
      fetch(urls.baseUrl + urls.sendLevel,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: jsonMap
      })
      .then(function(res){ return res.json() })
      .then(function(json){
          dispatch(gotStatus(json))
        })

  }
}
export function showHelp() {
    return {
        type:actions.SHOW_HELP,
    }
}
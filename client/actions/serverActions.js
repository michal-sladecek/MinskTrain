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
function gotSolvedLevels(solved){
    return {
        type:actions.GOT_SOLVED_LEVELS,
        solved, 
    }
}

export function sendLevel() {
  return function (dispatch, getState) {
      const state = getState().game
      const jsonMap = JSON.stringify({map: state.map, curLevel: state.curLevel, id: state.clientId})
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
          dispatch(getSolvedLevels())
          dispatch(gotStatus(json))
        })
  }
}
export function getSolvedLevels() {
    return (dispatch, getState) => {
        fetch(urls.baseUrl + urls.getSolvedLevels,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({id: getState().game.clientId})
        })
        .then(function(res){ return res.json() })
        .then(function(json){
            dispatch(gotSolvedLevels(json))
            })
    }
}
export function showHelp() {
    return {
        type:actions.SHOW_HELP,
    }
}
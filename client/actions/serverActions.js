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

function statusError(status){
    return {
        type:actions.GRADER_ERROR,
    }
}

function gotSolvedLevels(solved){
    return {
        type:actions.GOT_SOLVED_LEVELS,
        solved,
    }
}

function gotUserProfile(profile){
  return {
    type: actions.GOT_USER_PROFILE,
    profile,
  }
}

export function sendLevel() {
  return function (dispatch, getState) {
    const state = getState().game
    const jsonMap = JSON.stringify({map: state.map, curLevel: state.curLevel, id: state.clientId})
    dispatch(fetchingStatus())
    fetch(`.${urls.sendLevel}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: jsonMap
    })
    .then(function(res){ return res.json() })
    .then(function(json){
        dispatch(getSolvedLevels())
        dispatch(gotStatus(json))
      })
    .catch((err) => {
      dispatch(statusError())
    })
  }
}

export function getSolvedLevels() {
  return (dispatch, getState) => {
    fetch(`.${urls.getSolvedLevels}`, {
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'include',
      method: 'GET',
    })
    .then(function(res){ return res.json() })
    .then(function(json){
      dispatch(gotSolvedLevels(json))
    })
  }
}

export function getUserProfile() {
  return (dispatch, getState) => {
    fetch(`.${urls.getUserProfile}`, {
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'include',
      method: 'GET',
    })
    .then(function(res){ return res.json() })
    .then(function(json){
      dispatch(gotUserProfile(json))
    })
    .then(() => console.log(getState()))
  }
}

export function showHelp() {
    return {
        type:actions.SHOW_HELP,
    }
}

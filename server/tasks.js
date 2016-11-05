import request from 'request'

import config from './config'
import TASKS from '../tasks.config'


const LEVEL_TO_TASK = Object.keys(TASKS).reduce((res, task) => (
  Object.keys(TASKS[task].scoring).reduce((res, level) => ({...res, [level]: task}), res)
), {})


const submit = (uid, solved, task, done) => {
  const {scoring, token} = TASKS[task]
  const score = Object.keys(scoring)
    .filter((level) => solved.indexOf(level) !== -1)
    .reduce((score, level) => score + scoring[level], 0)

  request({
    url: config.submitURL,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      points: score, user: uid, token,
    })
  }, (error, response, body) => {
    if (error) {
      done(error)
      return
    }
    if (response.statusCode != 200) {
      done(`Server error: ${response.statusCode}`)
      return
    }
    done(null)
  })
}


export const resubmit = (uid, solved, level, done) => {
  const task = LEVEL_TO_TASK[level]
  if (!task) {
    done(`Level not found: ${level}`)
    return
  }
  submit(uid, solved, task, done)
}

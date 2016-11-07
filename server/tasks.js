import request from 'request'

import config from './config'
import levels from '../common/levels'

const submit = (uid, solved, group, done) => {
  const token = config.submitTokens[group]
  const score = Object.keys(levels)
    .filter((level) => levels[level].group === group)
    .filter((level) => solved.indexOf(level) !== -1)
    .reduce((score, level) => score + levels[level].points, 0)

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
  const {group} = levels[level]
  submit(uid, solved, group, done)
}

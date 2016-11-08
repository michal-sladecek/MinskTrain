import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

import config from './config'
import initAuth from './auth'
import testSolution from '../common/testSolution'
import * as users from './users'
import * as urls from '../common/urls'


export default (app) => {

  app.use(bodyParser.json())

  app.use(cookieSession({
    name: 'MinskTrainSession',
    keys: [config.secret]
  }))

  initAuth(app)

  app.use('/static', express.static(path.join(__dirname, '..', 'public')))

  app.get(urls.videoTutorial, (req, res) => {
    res.redirect(config.tutorialURL)
  })

  app.get(urls.getUserProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const user = req.user ? {...req.user, loggedIn: true} : {loggedIn: false}
    res.json(user)
  })

  app.get(urls.getSolvedLevels, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    users.getSolvedLevels(req.user.id, (err, solved) => {
      if (err) {
        console.log(err)
        res.statusCode = 500
        res.send()
        return
      }
      res.send(JSON.stringify(solved))
    })
  })

  app.post(urls.sendLevel, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    console.log('SEND_LEVEL')
    console.log('__TIME', new Date())
    console.log('__USER', req.user)
    console.log('__LEVEL', req.body.curLevel)
    console.log('__MAP', req.body.map)
    const result = testSolution(req.body.map, req.body.curLevel)
    console.log('__RESULT', result)
    if(result.ok){
      users.solveLevel(req.user.id, req.body.curLevel, (err) => {
        if (err) {
          console.log(err)
          res.statusCode = 500
          console.log('__FAILED')
          res.send()
          return
        }
        console.log('__SAVED')
        res.send(JSON.stringify(result))
      })
    } else {
      console.log('__SAVED')
      res.send(JSON.stringify(result))
    }
  })

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
  })

  app.listen(config.port, config.host, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at ${config.baseUrl}`);
  })
}

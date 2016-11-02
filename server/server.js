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

  app.get(urls.getUserProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const user = req.user ? {...req.user, loggedIn: true} : {loggedIn: false}
    res.json(user)
  })

  app.get(urls.getSolvedLevels, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    users.getAllSolvedLevels(req.user.id, (solved) => {
      res.send(JSON.stringify(solved))
    })
  })

  app.post(urls.sendLevel, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const result = testSolution(req.body.map, req.body.curLevel)
    if(result.ok){
      users.solveLevel(req.body.id, req.body.curLevel)
    }
    res.send(JSON.stringify(result))
  })

  app.get('*', (req, res) => {
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

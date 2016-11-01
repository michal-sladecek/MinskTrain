var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

import config from './config'
import testSolution from '../common/testSolution'
import * as users from './users'
import * as urls from '../common/urls'


export default (app) => {
  app.use(bodyParser.json())

  app.use('/static', express.static(path.join(__dirname, '..', 'public')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
  })

  app.post(urls.getSolvedLevels, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    users.getAllSolvedLevels(req.body.id, (solved) => {
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

  app.listen(config.port, config.host, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at http://${config.host}:${config.port}`);
  })
}

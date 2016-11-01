var path = require('path')
var express = require('express')

import testSolution from '../common/testSolution'
import * as users from './users'
import initServer from './server'

const app = express()

app.get('/static/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'bundle.js'))
})

initServer(app)

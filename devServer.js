var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var bodyParser = require('body-parser')

import testSolution from './common/testSolution'

var app = express()
var compiler = webpack(config);
import * as urls from './common/urls'


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(bodyParser.json())
app.use(require('webpack-hot-middleware')(compiler))

app.use('/static', express.static(__dirname+'/public'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post(urls.getSolvedLevels, (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const solved = [2, 4, 7]
  res.send(JSON.stringify(solved))
})

app.post(urls.sendLevel, (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const result = testSolution(req.body.map, req.body.curLevel)
  res.send(JSON.stringify(result))
})

app.listen(8000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8000');
});

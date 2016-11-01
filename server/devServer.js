var express = require('express')
var webpack = require('webpack')
var config = require('../webpack.config.dev')

import testSolution from '../common/testSolution'
import * as users from './users'
import initServer from './server'

const app = express()
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))


initServer(app)

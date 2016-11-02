import 'babel-polyfill'
import gulp from 'gulp'
import gutil from 'gulp-util'
import babel from 'gulp-babel'
import path from 'path'
import bg from 'gulp-bg'
import eslint from 'gulp-eslint'
import mocha from 'gulp-mocha'
import webpack from 'webpack'

import prodConfig from './webpack.config.prod'


gulp.task('default', ['devServer'])

gulp.task('devServer', (done) => {
  const bwPath = './node_modules/.bin/babel-watch'
  bg(bwPath, 'server/devServer.js')(done)
})

gulp.task('prodServer', (done) => {
  const bnPath = './node_modules/.bin/babel-node'
  bg(bnPath, 'server/prodServer.js')(done)
})

gulp.task('prodBuild', (done) => {
  webpack(prodConfig, function(err, stats) {
    if(err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString())
    done()
  })
})

gulp.task('eslint', () => {
  return gulp.src([
    '**/*.js',
    '!build*/**',
    '!node_modules/**',
  ]).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})


gulp.task('test', () => {
  return gulp.src(['test/*.js'])
    .pipe(mocha({
      compilers: {js: babel},
      reporter: 'spec',
    }))
})
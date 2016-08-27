import 'babel-polyfill'
import gulp from 'gulp'
import babel from 'gulp-babel'
import path from 'path'
import bg from 'gulp-bg'
import eslint from 'gulp-eslint'
import mocha from 'gulp-mocha'


gulp.task('default', ['server'])

gulp.task('server', (done) => {
    const bwPath = 'node'
    bg(bwPath, './devServer.js')(done)
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
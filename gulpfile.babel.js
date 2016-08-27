import 'babel-polyfill'
import gulp from 'gulp'
import babel from 'gulp-babel'
import path from 'path'
import bg from 'gulp-bg'
import eslint from 'gulp-eslint'


gulp.task('default', ['server'])

gulp.task('server', (done) => {
    const bwPath = './node_modules/.bin/babel-watch'
    bg(bwPath, './server/server.js')(done)
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
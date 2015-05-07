gulp = require('gulp')
$ = require('gulp-load-plugins')()
browserSync = require('browser-sync')

gulp.task 'serve', ->
  browserSync.init {
    server: "./"
  }

  gulp.watch('**/*.html').on 'change', -> browserSync.reload()

gulp.task('default', ['serve'])
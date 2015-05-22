gulp = require('gulp')
$ = require('gulp-load-plugins')()
browserSync = require('browser-sync')

gulp.task 'styles', ->
  gulp.src ['./node_modules/akurganow-gauge/gauge.css']
  .pipe gulp.dest './'
  .pipe browserSync.reload {stream: true}

gulp.task 'script-uglify', ->
  gulp.src ['./node_modules/akurganow-gauge/gauge.js']
  .pipe $.uglify()
  .pipe gulp.dest './'
  
  gulp.watch('script.js').on 'change', ->
    browserSync.reload()

gulp.task 'serve', ['script-uglify','styles'], ->
  browserSync.init {
    server: "./"
  }

  gulp.watch('**/*.html').on 'change', -> browserSync.reload()

gulp.task('default', ['serve'])
gulp = require('gulp')
$ = require('gulp-load-plugins')()
browserSync = require('browser-sync')

gulp.task 'styles', ->
  gulp.src './gauge.css'
  .pipe $.sourcemaps.init()
  .pipe $.concat 'gauge.css'
  .pipe $.autoprefixer()
  .pipe $.minifyCss()
  .pipe $.rename({
    extname: ".min.css"
  })
  .pipe $.sourcemaps.write()
  .pipe gulp.dest './'
  .pipe browserSync.reload {stream: true}

gulp.task 'script-uglify', ->
  gulp.src './gauge.js'
  .pipe $.sourcemaps.init()
  #.pipe $.uglify()
  .pipe $.rename({
    extname: ".min.js"
  })
  .pipe $.sourcemaps.write()
  .pipe gulp.dest './'
  
  gulp.watch('gauge.js').on 'change', ->
    browserSync.reload()

gulp.task 'serve', ['script-uglify','styles'], ->
  browserSync.init {
    server: "./"
  }

  gulp.watch('**/*.html').on 'change', -> browserSync.reload()
  
  gulp.watch ['./gauge.css'], ['styles']
  gulp.watch ['./gauge.js'], ['script-uglify']

gulp.task('default', ['serve'])
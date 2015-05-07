gulp = require('gulp')
$ = require('gulp-load-plugins')()
browserSync = require('browser-sync')

gulp.task 'styles', ->
  gulp.src './css/*.css'
  .pipe $.sourcemaps.init()
  .pipe $.concat 'style.css'
  .pipe $.autoprefixer()
  .pipe $.sourcemaps.write()
  .pipe gulp.dest './'
  .pipe browserSync.reload {stream: true}

gulp.task 'script-uglify', ->
  gulp.src './script.js'
  .pipe $.sourcemaps.init()
  .pipe $.uglify()
  .pipe $.rename({
    extname: ".min.js"
  })
  .pipe $.sourcemaps.write()
  .pipe gulp.dest './'
  
  gulp.watch('script.js').on 'change', ->
    browserSync.reload()

gulp.task 'serve', ['script-uglify','styles'], ->
  browserSync.init {
    server: "./"
  }

  gulp.watch('**/*.html').on 'change', -> browserSync.reload()
  
  gulp.watch ['./css/*.css'], ['styles']
  gulp.watch ['./script.js'], ['script-uglify']

gulp.task('default', ['serve'])
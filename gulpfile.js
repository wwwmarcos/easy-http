const gulp = require('gulp')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const minify = require('gulp-minify');

const paths = {
  src: 'src/easy-http.js',
  dist: 'dist/',
  html: 'index.html'
}

gulp.task('browser-sync', () => {
  browserSync.init({
    open: true,
    notify: false,
    server: './'
  })
})

gulp.task('compress', () => {
  gulp.src(paths.src)
    .pipe(minify())
    .pipe(gulp.dest(paths.dist))
})

gulp.task('default', ['browser-sync'], () => {
  gulp.watch(paths.src, ['compress'])
  gulp.watch(paths.dist, reload)
  gulp.watch(paths.html, reload)
})
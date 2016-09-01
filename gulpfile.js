var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('browserify', function() {

    browserify('./js/main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));

});

gulp.task('watch', function () {
    gulp.watch('./js/*', ['browserify'])
  });
gulp.task('default', ['browserify', 'watch', 'webserver'])

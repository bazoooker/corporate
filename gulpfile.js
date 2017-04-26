var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	gulp.src('source/sass/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('public/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function(){
  gulp.watch('source/sass/**/*.scss', ['sass']); 
  gulp.watch('public/*.html', ['sass']);
}) 

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'corporate'
    },
  })
})
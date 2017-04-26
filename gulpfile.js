
// переменные
var gulp = require('gulp');
// Requires the gulp-sass plugin
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "corporate"
    });

    gulp.watch("source/sass/**/*.scss", ['sass']);
    gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("source/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/styles"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);










// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'corporate'
//     }
//   });
// });


// gulp.task('sass', function() {
// 	return gulp.src('source/sass/**/*.scss') // Gets all files ending with .scss in app/scss
//     .pipe(sass())
//     .pipe(gulp.dest('public/styles'))
//     .pipe(browserSync.stream({
//       stream: true
//     }))
// });


// gulp.task('watch', ['browserSync', 'sass'], function(){
//   gulp.watch('public/*.html', browserSync.reload);
//   gulp.watch('source/sass/**/*.scss', ['sass']);   
// }); 

// gulp.task('default', ['watch']);

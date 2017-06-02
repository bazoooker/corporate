var gulp            = require('gulp'), // Подключаем Gulp
    sass            = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync     = require('browser-sync'); // Подключаем Browser Sync
    autoprefixer    = require('gulp-autoprefixer'); // Подключаем автопрефиксер
    cssnano         = require('gulp-cssnano'); // Подключаем минификацию css-кода
    rename          = require('gulp-rename'); // Добавляем к минифицированному .css файлу суффикс .min

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('autoprefixer', function(){
            gulp.src('dist/css/**/*.css')
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(gulp.dest('dist/css/'));
    });


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: true // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass',], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('dist/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    // Наблюдение за другими типами файлов
});




// Объявляем наши плагины
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

// Создаем sass задание

// gulp.src - путь по которому лежит scss-файл который мы будем компилировать

// gulp.dest - путь в который мы будем генерить нашу css-ку

// plumber() - не выбрасывать из компилятора если есть ошибки

// errLogToConsole: true - выводить номер строки в которой допущена ошибка

gulp.task('sass', function () {
gulp.src('scss/main.scss')
.pipe(plumber())
.pipe(sass({errLogToConsole: true}))
.pipe(gulp.dest('project/css'));
});

	gulp.task('default', function() {
gulp.run( 'sass');
gulp.watch('scss/**', function(event) {
gulp.run('sass');
})
})
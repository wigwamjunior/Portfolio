// Source of gulpfile.js

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
                

gulp.task('css', function() {
    return gulp.src('src/design/src/css/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/design/src/css/*.css')

gulp.task('default',['css'], function() {});
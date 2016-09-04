/**
 * Created by Renzo on 9/4/2016.
 */
var gulp =require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat');

gulp.task('scripts', function () {
    return gulp.src('./resources/js/*.js')
        .pipe(uglify({mangle:false}))
        .pipe(concat('pepin.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream());
});
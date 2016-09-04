/**
 * Created by Renzo on 9/4/2016.
 */
var gulp =require('gulp'),
    compass = require('gulp-compass'),
    uglifycss =require('gulp-uglifycss'),
    browserSync = require('browser-sync').create();

gulp.task('compass', function () {
    gulp.src('resources/sass/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'dist/css',
            sass: 'resources/sass',
            cache: false
        }))
        .pipe(uglifycss({
            'uglyComments':false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

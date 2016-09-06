var gulp =require('gulp'),
    requireDir=require('require-dir')('./resources/gulp-tasks'),
    browserSync = require('browser-sync').create(),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss =require('gulp-uglifycss');

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

gulp.task('scripts', function () {
    return gulp.src('./resources/js/*.js')
        .pipe(uglify({mangle:false}))
        .pipe(concat('pepin.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('resources/sass/**/*.scss', ['compass']);
    gulp.watch('dist/*.html', browserSync.reload);
    gulp.watch('resources/js/**/*.js',['scripts']);
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
})
gulp.task('default', ['browserSync', 'compass','scripts','watch']);



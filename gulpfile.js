var gulp =require('gulp'),
 requireDir=require('require-dir')('./resources/gulp-tasks'),
    browserSync = require('browser-sync').create();

gulp.task('default', function () {
    console.log('hola');
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

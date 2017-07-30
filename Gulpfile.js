var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('dev/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dev/css/'));
});

gulp.task('default', function() {
    gulp.watch('dev/sass/**/*.scss', ['styles']);
});
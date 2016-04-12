var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');

gulp.task('default', ['build', 'server']);

gulp.task('build', function() {
    return gulp.src('./static/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['build']);
});

gulp.task('server', shell.task([
    'python main.py'
    ]));
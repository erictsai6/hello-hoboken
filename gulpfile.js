var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var jspm = require('gulp-jspm');

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
    'python tester.py',
    'python main.py'
    ]));

// gulp.task('build', function () {
//     return gulp.src('jsx/app.jsx!')
//         .pipe(jspm())
//         .pipe(gulp.dest('dist/'));
// });
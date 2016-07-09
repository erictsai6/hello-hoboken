var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var jspm = require('gulp-jspm');
var copy = require('gulp-contrib-copy');
var clean = require('gulp-clean');
var merge = require('merge-stream');
var replace = require('gulp-replace');

gulp.task('default', ['reset-env', 'sass', 'server']);

gulp.task('serveBuild', ['set-env', 'build', 'server'])

gulp.task('build', [ 
    'sass', 
    'copy'
]);

gulp.task('reset-env', function() {
    delete process.env.NJTRANSIT_SETTINGS;
});

gulp.task('set-env', function() {
    return process.env.NJTRANSIT_SETTINGS = 'settings/production.py';
});

gulp.task('sass', function() {
    return gulp.src('./static/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css'));
});

gulp.task('clean', function() {
    return gulp.src('dist/', {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

gulp.task('jspm-bundle', shell.task(
    'jspm bundle js/app.jsx! static/bundles/app.bundle.js --inject'
));

gulp.task('copy', ['clean', 'jspm-bundle'], function() {
    return merge([
        gulp.src('static/css/**/*.css')
            .pipe(replace(/\/static\//, '/dist/'))
            .pipe(gulp.dest('dist/css')),
        gulp.src('static/img/**')
            .pipe(gulp.dest('dist/img')),
        gulp.src('static/jspm_packages/**')
            .pipe(gulp.dest('dist/jspm_packages')),
        gulp.src(['static/**/*.ico', 'static/*.js', '!static/config.js'])
            .pipe(gulp.dest('dist')),
        gulp.src('static/config.js')
            .pipe(replace(/baseURL: "\/static"/, 'baseURL: "/dist"'))
            .pipe(gulp.dest('dist')),
        gulp.src('static/bundles/*.js')
            .pipe(gulp.dest('dist/bundles'))
    ]);
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['build']);
});

gulp.task('server', shell.task([
    'python tester.py',
    'python main.py'
    ]));

//var gulp = require('gulp');
//gulp.task('default', function() {
//    console.log("hello world");
//});

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');


gulp.task('default', function () {
    return browserify('./source/app.js', { debug: true })
        .transform(babelify, {presets: ["react", "es2015"]})
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'))
});


gulp.task('watch', function() {
    gulp.watch('./source/**/*.js', ['default']);

    livereload.listen();
    gulp.watch(['./build/**']).on('change', livereload.changed);
});



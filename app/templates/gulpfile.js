'use strict';
var gulp = require('gulp'),
    bump = require('gulp-bump'),
    sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
    gulp.src('./assets/scss/*.scss')
        .pipe(sass({
            style : 'nested'
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('bump', function () {
    gulp.src(['./package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function () {
    gulp.src(['./package.json'])
        .pipe(bump({
            type : 'minor'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function () {
    gulp.src(['./package.json'])
        .pipe(bump({
            type : 'major'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
    gulp.watch([
        './assets/scss/*.scss',
        './assets/scss/**/*.scss'
    ], function () {
        gulp.run('sass');
    });
});

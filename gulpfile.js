'use strict';
var gulp = require('gulp'),
    bump = require('gulp-bump');

gulp.task('bump', function () {
    gulp.src(['./package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
})

gulp.task('bump:minor', function () {
    gulp.src(['./package.json'])
        .pipe(bump({
            type : 'minor'
        }))
        .pipe(gulp.dest('./'));
})

gulp.task('bump:major', function () {
    gulp.src(['./package.json'])
        .pipe(bump({
            type : 'major'
        }))
        .pipe(gulp.dest('./'));
})

gulp.task('default', function () {

})

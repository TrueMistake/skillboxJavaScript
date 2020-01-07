"use strict";
const gulp = require('gulp'),
    babel = require('gulp-babel'),
    minify = require('gulp-minify');

gulp.task('build', () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe(minify())
        .pipe(gulp.dest('./build'))
});


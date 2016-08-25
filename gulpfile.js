'use strict';

const gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('img/**/*.*')
        .pipe(gulp.dest('dest'));
});
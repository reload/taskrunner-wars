'use strict';

// Include gulp
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    coffee = require('gulp-coffee');

var options = {
    SASS_SOURCE     : "./sass/*.scss",
    SASS_DEST       : "./css/",
    COFFEE_SOURCE   : "./coffeescript/*.coffee",
    COFFEE_DEST     : "./js/",
};

gulp.task('sass', function () {
  gulp.src(options.SASS_SOURCE)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(options.SASS_DEST));
});

gulp.task('coffee', function() {
  gulp.src(options.COFFEE_SOURCE)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(options.COFFEE_DEST))
});
 
gulp.task('default', function() {
  gulp.watch(options.SASS_SOURCE, ['sass']);
  gulp.watch(options.COFFEE_SOURCE, ['coffee']);
});

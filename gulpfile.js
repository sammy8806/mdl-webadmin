const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('main.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./out'));
});
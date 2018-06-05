var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('jade', function() {
  return gulp.src('./jade/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
});

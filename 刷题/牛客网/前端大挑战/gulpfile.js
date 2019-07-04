const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

gulp.task('default', () => {
    return gulp.src('./src/**/index.js')
        .pipe(babel())
        .pipe(rename(path => path.extname = '.es5.js'))
        .pipe(gulp.dest('./src'));
});

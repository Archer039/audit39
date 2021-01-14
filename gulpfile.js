const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const minCss = require('gulp-clean-css');
const minImage = require('gulp-imagemin');


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
    browserSync.watch('public/**/*').on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({sufix: '.min'}))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(minCss())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('public/js/'));
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('public/fonts/'));
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('public/img/'));
});

gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/js/*.js', gulp.series('js'));
    gulp.watch('app/fonts/*', gulp.series('fonts'));
    gulp.watch('app/img/*', gulp.series('img'));
});

gulp.task('default', gulp.parallel('serve', 'watch'));
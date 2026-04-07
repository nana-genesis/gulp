const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Compila SASS
function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Minifica JS
function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

// Comprime imagens
function images() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

// Copia HTML
function html() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

// Watch + Live Reload
function watch() {
  browserSync.init({ server: './dist' });
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/images/**/*', images);
  gulp.watch('src/*.html', html);
}

exports.default = gulp.series(gulp.parallel(styles, scripts, images, html), watch);localStorage
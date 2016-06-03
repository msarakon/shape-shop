const gulp        = require('gulp');
const rename      = require('gulp-rename');
const babel       = require('gulp-babel');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const karmaServer = require('karma').Server;
const fs          = require('fs');
const babelify    = require('babelify');
const browserify  = require('browserify');
const buffer      = require('vinyl-buffer');
const source      = require('vinyl-source-stream');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('serve', ['static', 'bundle', 'normalize', 'sass'], () => {

  browserSync.init({
    server: './dist'
  });

  gulp.watch('./app/*.js', ['babel']);
  gulp.watch('./app/scss/*.scss', ['sass']);
  gulp.watch('./app/*.html', ['html']).on('change', browserSync.reload);
});

// normalize.css
gulp.task('normalize', () => { 
  return gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(rename('_normalize.scss'))
    .pipe(gulp.dest('./app/scss/')); 
});

// Static
gulp.task('static', ['html', 'assets', 'json']);

// HTML template
gulp.task('html', () => {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist'));
});

// Assets
gulp.task('assets', () => {
  return gulp.src('./app/assets/*')
    .pipe(gulp.dest('./dist/assets/'));
});

// JSON
gulp.task('json', () => {
  return gulp.src('./app/json/*')
    .pipe(gulp.dest('./dist/json/'));
});

// Compile SASS into CSS & auto-inject into browser(s)
gulp.task('sass', () => {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('bundle', () => {
    var bundler = browserify({
        entries: './app/index.js',
        debug: true
    });
    bundler.transform(babelify);

    bundler.bundle()
        .on('error', (err) => { console.error(err); })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve']);

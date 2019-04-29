'use-strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const del = require('del');

sass.compiler = require('node-sass');

const jsFolder = './src/js'
const assetsFolder = 'www/assets';

const paths = {
  styles: {
    src: './src/sass/main.scss',
    dest: `${assetsFolder}/styles/`
  },
  scripts: {
    src: [
      // External Scripts
      `${jsFolder}/lib/*.js`,
      // Api scripts
      `${jsFolder}/api/Utils.js`,
      `${jsFolder}/api/Albums.js`,
      // Pages scripts
      `${jsFolder}/pages/*.js`,
      // routes
      `${jsFolder}/route.js`,
      `${jsFolder}/router.js`,
      // Main Entry script
      `${jsFolder}/main.js`
    ],
    dest: `${assetsFolder}/scripts/`
  }
};

/* 
 * Cleans the assets folder
 */
function clean() {
  return del([ 'assets' ]);
}
 
/*
 * Compiles the scss files into a single css and minifies it.
 */
function styles(done) {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .on('end', done);
}

/**
 * Concats all js files and minifies them into a single bundled .js
 */
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}
 
/**
 * Watches for changes on the scss and js files to rebuild.
 */
function watch() {
  gulp.watch('./src/sass/**.scss', scripts);
  gulp.watch(paths.styles.src, styles);
} 

/**
 * Serves the app locally.
 */
function serve() {
  connect.server({
    root: 'www',
    livereload: true
  });
};

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.series(clean, gulp.parallel(styles, scripts));

const buildAndServe = gulp.series(build, gulp.parallel(watch, serve))
 
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = buildAndServe
 

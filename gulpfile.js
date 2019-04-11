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
    src: [`${jsFolder}/lib/*.js`, `${jsFolder}/api/Utils.js`, `${jsFolder}/api/Albums.js`, `${jsFolder}/pages/*.js`, `${jsFolder}/main.js`],
    dest: `${assetsFolder}/scripts/`
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}
 
/*
 * Define our tasks using plain functions
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

 
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}
 
function watch() {
  gulp.watch('./src/sass/**.scss', scripts);
  gulp.watch(paths.styles.src, styles);
} 

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
 
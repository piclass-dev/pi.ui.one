
var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  order = require("gulp-order"),
  babel = require("gulp-babel"),
  es2015 = require("babel-preset-es2015"),
  browserify = require('gulp-browserify'),
  babelify = require("babelify"),
  sourcemaps = require("gulp-sourcemaps"),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer');

gulp.task('style', function() {
  // return gulp.src()
  // .pipe(sass({ style: 'expanded', }))
  return sass('src/style/sass/main.scss', {
    style: 'expanded',
    // loadPath: [paths.sassImportsPath]
  })
  // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  // .pipe(gulp.dest('dist/styles'))
  // .pipe(rename({ suffix: '.min' }))
  // .pipe(minifycss())
    .pipe(gulp.dest('debug/static/css')).pipe(notify({message: 'Styles task complete'}));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/js/*.js')
  // .pipe(jshint('.jshintrc'))
  // .pipe(jshint.reporter('default'))
    .pipe(concat('piScript.js')).pipe(gulp.dest('debug/static/js'))
  // .pipe(rename({ suffix: '.min' }))
  // .pipe(uglify())
  // .pipe(gulp.dest('debug/static/js'))
    .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('es6to5', function() {
  return gulp.src('src/scripts/es6/*.js').pipe(babel({presets: [es2015]})).pipe(gulp.dest('src/scripts/es6/convertedES5'));
});

gulp.task('pack', ['es6to5'], function() {
  return gulp.src('src/scripts/es6/convertedES5/main.js').pipe(browserify())
  //.pipe(uglify())
    .pipe(gulp.dest('debug/static/js')).pipe(notify({message: 'packed'}));
});

gulp.task("browserify", function () {
  gulp.src('src/scripts/es6/convertedES5/main.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});

// image
gulp.task('images', function() {
  return gulp.src('src/images/**/*').pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))).pipe(gulp.dest('dist/images')).pipe(notify({message: 'Images task complete'}));
});

// clean
gulp.task('clean', function() {
  return gulp.src([
    'dist/styles', 'dist/scripts', 'dist/images'
  ], {read: false}).pipe(clean());
});

// default
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images');
});


// watcher
gulp.task('watch', function() {
  gulp.watch('src/style/**/*.scss', ['style']);
  gulp.watch('src/scripts/js/*.js', ['scripts']);
  gulp.watch('src/scripts/es6/*.js', ['pack']);
  //gulp.watch('src/images/**/*', ['images']);

  livereload.listen();
  gulp.watch(['debug/**']).on('change', function(file) {
    livereload.changed(file.path);
    return notify({message: 'Scripts task complete'});
  });

});

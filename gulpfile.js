// 载入外挂
var gulp = require('gulp'),  
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
//    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

// 样式
gulp.task('style', function() {  
  // return gulp.src()
  //   .pipe(sass({ style: 'expanded', }))
  return sass('src/style/sass/main.scss', {
            style: 'expanded',
            // loadPath: [paths.sassImportsPath]
        })
   // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
   // .pipe(gulp.dest('dist/styles'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(minifycss())
    .pipe(gulp.dest('debug/static/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function() {  
  return gulp.src('src/scripts/js/*.js')
   //  .pipe(jshint('.jshintrc'))
   // .pipe(jshint.reporter('default'))
    .pipe(concat('piScript.js'))
    .pipe(gulp.dest('debug/static/js'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(uglify())
    // .pipe(gulp.dest('debug/static/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// 图片
gulp.task('images', function() {  
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function() {  
  return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
    .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {  
    gulp.start('styles', 'scripts', 'images');
});

// gulp.task('watch', function() {
//     livereload.listen();
//     gulp.watch('test.html',function(file){
//         livereload.changed(file.path);
//     });
// });


// 看手
gulp.task('watch', function() {

  // 看守所有.scss档
  gulp.watch('src/style/**/*.scss', ['style']);

  // 看守所有.js档
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // 看守所有图片档
  //gulp.watch('src/images/**/*', ['images']);

  // 建立即时重整伺服器
  // var server = livereload();
  livereload.listen();
  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  gulp.watch(['debug/**']).on('change', function(file) {
    livereload.changed(file.path);
    return notify({ message: 'Scripts task complete' });
  });

});
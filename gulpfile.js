var gulp = require('gulp'), 
    browserSync = require('browser-sync').create(),
    smushit = require('gulp-smushit'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('source/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''));
});
 
gulp.task('minify-css', function() {
  return gulp.src('source/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(''));
});
 
gulp.task('compress', function (cb) {
    pump([
        gulp.src('source/**/*.js'),
        uglify(),
        gulp.dest('')
    ],
    cb
  );
});

gulp.task('hello', function() {
    console.log('Yo yo yo!');
});

gulp.task('browserSync', function() {
    browerSync.init({
        server: true
    })
});

// image processing
gulp.task('images', function() {
  var final = 'img/';
  return gulp.src('source/img/**/*')
    .pipe(newer(final))
    .pipe(imagemin({ optimizationLevel: 7 }))
    .pipe(gulp.dest(final));
});

// image processing - first attempt - delete?
gulp.task('imageSpew', function(filename, pixelwidth) {
    return gulp.src (filename)
        .pipe() // find a gulp plugin that will make your images the width of pixelwidth
    // gotta say, though, in the end we'll want to have gulp make an array of images tha thelp with mobile.
    // could make functionality such that pixelwidth is an array, and it reads each value, then spits out a bunch of images at the right sizes.
    // actully, here's the thing. I don't need pixelwidth to be a var , bc i will know in advance the widths that are possible based on the code.
});

gulp.task('default', ['images', 'minify-css', 'compress', 'minify']);


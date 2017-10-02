var gulp = require('gulp'), 
    browserSync = require('browser-sync').create(),
    smushit = require('gulp-smushit'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin');

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
    .pipe(imagemin({ optimizationLevel: 6 }))
    .pipe(gulp.dest(final));
});

// image processing - first attempt - delete?
gulp.task('imageSpew', function(filename, pixelwidth) {
    return gulp.src (filename)
        .pipe() // find a gulp plugin that will make your images the width of pixelwidth
    // gotta say, though, in the end we'll want to have gulp make an array of images tha thelp with mobile.
    // could make functionality such that pixelwidth is an array, and it reads each value, then spits out a bunch of images at the right sizes.
});


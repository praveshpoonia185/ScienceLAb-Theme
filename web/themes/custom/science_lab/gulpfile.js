var gulp = require('gulp');
 const sass = require('gulp-sass')(require('sass')); 
var uglifycss = require('gulp-uglifycss');


//gulp task to scss compile into css
gulp.task('scss', function(){ 
return gulp.src('./scss/*.scss') 
.pipe(sass().on('error', sass.logError)) .pipe(gulp.dest('./css')); 
});


	//gulp task to minified css
gulp.task('css', function(){ 
gulp.src('./css/*.css') 
.pipe(uglifycss({ "uglyComments": true })) .pipe(gulp.dest('./dist')); 
});


	// gulp task to run scss,css command using run 
gulp.task('run', gulp.series('scss', 'css'));


// gulp task to run scss,css command using watch 
gulp.task('watch', function(){ 
gulp.watch('./scss/.scss', ['scss']); 
gulp.watch('./css/.css', ['css']); 
});


// default compile all scss files run command gulp
gulp.task('default', gulp.series('run', 'watch'));

// import
var gulp = require('gulp');
var runSequence = require('run-sequence');
var htmlify = require('gulp-angular-htmlify');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

var angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject');


// tasks
gulp.task('task_1', function(){
	console.log("task_1 task.");
});

gulp.task('anuglar-sort', function(){
	gulp.src('./app/index.html')
	  .pipe(inject(
	    gulp.src(['./app/**/*.js']).pipe(angularFilesort())
	  ))
	  .pipe(gulp.dest('./build'));
});

// htmlify
gulp.task('htmlify', function(){
	gulp.src('./app/*.html')
		.pipe(htmlify())
		.pipe(gulp.dest('./app/'));
});

// webpack


gulp.task('default', function(){
	runSequence('');
});


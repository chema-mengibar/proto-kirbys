//------------------------------------------------------------------------------  Init modules
var gulp = require('gulp');

var header = require('gulp-header');
var rename = require("gulp-rename");

var sass = require('gulp-sass');
var stripCssComments = require('gulp-strip-css-comments');
var strip = require('gulp-strip-comments');
var rename = require("gulp-rename");
var modernizr = require('gulp-modernizr');
var pug = require('gulp-pug');
var path = require('path');
var data = require('gulp-data');
var uncache = require('gulp-uncache');
var concat = require('gulp-concat');

var pkg = require('../package.json');

// #######################################################################################  TASKS


gulp.task( 'assets:move', function( ){

  gulp.src([ './src/assets/images/**/*' ])
    .pipe( gulp.dest( 'dist-pages/assets/images' ) );

  // gulp.src([
  //   'node_modules/bootstrap-sass/assets/fonts/**/*',
  //   'node_modules/font-awesome/fonts/**',
  // ])
  //   .pipe( gulp.dest('dist/' + pkg.custom.projectFolder +'fonts' ) );

  // gulp.src([
  //   './src/fonts/Montserrat/**/*',
  //   '!./src/fonts/Montserrat/**/*.css',
  // ])
  //   .pipe( gulp.dest('dist/' + pkg.custom.projectFolder +'fonts/Montserrat' ) );


  // gulp.src([
  //   'node_modules/jquery/dist/jquery.min.js',
  //   'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
  // ])
  //   .pipe(concat('vendor.js'))
  //   .pipe(gulp.dest('./dist/' + pkg.custom.projectFolder +'js'));


  // gulp.src('./src/scss/custom_bootstrap.scss')
  //   .pipe( sass( {outputStyle: 'compressed'} ).on( 'error', sass.logError ) )
  //   .pipe( stripCssComments( ) )
  //   .pipe( rename( "bootstrap.css" ) )
  //   .pipe( gulp.dest( 'dist/' + pkg.custom.projectFolder +'css' ) );


  // gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  //   .pipe( rename( "font-awesome.css" ) )
  //   .pipe(gulp.dest('dist/' + pkg.custom.projectFolder +'css'))

});

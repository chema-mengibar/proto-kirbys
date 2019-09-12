var os = require('os');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
var dir = requireDir('./gulp-tasks');

var exec = require('child_process').exec;
var pkg = require('./package.json');

var osInfo = os.networkInterfaces() ;
var localAddress = osInfo.Ethernet[1].address;


const webpack = require('webpack-stream');

gulp.task( 'webpack:build', function( ){

  gulp.src('dist-pages/assets/js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist-pages/assets/js'));
})


//#####################################################################################  MAIN FUNCTIONS

port = 3000;
env = 'development';
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './dist-pages'
        }
    }),
    browserSync.reload({})
})

console.log('#############################################################################################');
console.log( localAddress + ":" + port );
console.log('#############################################################################################');


/*---------------------------------------------------------------------------- gulp default
*  Run almost everything
*  cmd >> gulp
*
* options:
* - copyHtml
* - buildHtml
*
*/
gulp.task( 'base', [ 'assets:move', 'kirbys:move', 'scss:build', 'webpack:build' ] );  //, 'build:pug'


/* ------------------------------------------------------------------------------ gulp dev
*  browserSync and file watchers, on change files
*  cmd >> gulp dev
*
* Call the functions and add the "watch" and "reload" events
*/
gulp.task( 'dev', [  "pug:build" , 'scss:build' , 'assets:move', 'webpack:build', 'browserSync'], function( ) {

    gulp.watch([ './src/view/**/*.pug',  './src/view/**/*.json'], ['pug:build'] );
    gulp.watch(['./src/scss/**/*.scss', './src/view/**/*.scss'], ['scss:build'] );

    gulp.watch(['./src/assets/images/**/*'], ['assets:move'] );

    gulp.watch( './src/js/**/*.js', ['webpack:build'] );

    /* Reloads the browser whenever HTML or JS files change */
    gulp.watch( './dist-pages/**/*', browserSync.reload );


});

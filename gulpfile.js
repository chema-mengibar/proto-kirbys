var os = require('os');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
var dir = requireDir('./gulp-tasks');

var exec = require('child_process').exec;
var pkg = require('./package.json');

var osInfo = os.networkInterfaces() ;
var localAddress = osInfo.Ethernet[1].address;

//#####################################################################################  MAIN FUNCTIONS

port = 3000;
env = 'development';
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './dist/' + pkg.custom.projectFolder
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
gulp.task( 'base', [ 'assets:move', 'kirbys:move', 'scss:build' ] );  //, 'build:pug'


/* ------------------------------------------------------------------------------ gulp dev
*  browserSync and file watchers, on change files
*  cmd >> gulp dev
*
* Call the functions and add the "watch" and "reload" events
*/
gulp.task( 'dev', [  "pug:build" , 'scss:build' , "browserSync" ], function( ) {

    gulp.watch( './src/views/**/*', ['pug:build'] );
    gulp.watch( './src/scss/**/*.scss', ['scss:build'] );

//   gulp.watch( './source/js/**/*.js', ['dynamicJs'] );

    /* Reloads the browser whenever HTML or JS files change */
    gulp.watch( 'dist-pages/**/*', browserSync.reload );


});

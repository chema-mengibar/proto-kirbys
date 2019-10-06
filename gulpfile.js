const os = require('os');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const requireDir = require('require-dir');
// var dir = requireDir('./gulp-tasks');
// var exec = require('child_process').exec;
// var pkg = require('./package.json');

const osInfo = os.networkInterfaces() ;
const localAddress = osInfo.Ethernet[1].address;
const webpack = require('webpack-stream');


/**
 *  Task
 */
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


/**
 *  Move assets, build css
 */
gulp.task( 'base', [ 'assets:move', 'scss:build', 'webpack:build' ] );  //, 'build:pug'


/**
 * Task
 * Move assets, build templates , cut from templates the cms-snippets
 */
gulp.task( 'build', [ 'assets:move',  "pug:build" , 'scss:build' , 'assets:move', 'webpack:build', 'cms:cut' ] );  //, 'build:pug'


/* 
*   For dvelopment, Browser Sync
*/
gulp.task( 'dev', [  "pug:build" , 'scss:build' , 'assets:move', 'webpack:build', 'browserSync'], function( ) {

    gulp.watch([ './src/view/**/*.pug',  './src/view/**/*.json'], ['pug:build'] );
    gulp.watch(['./src/scss/**/*.scss', './src/view/**/*.scss'], ['scss:build'] );

    gulp.watch(['./src/assets/images/**/*'], ['assets:move'] );

    gulp.watch( './src/js/**/*.js', ['webpack:build'] );

    /* Reloads the browser whenever HTML or JS files change */
    gulp.watch( './dist-pages/**/*', browserSync.reload );
});

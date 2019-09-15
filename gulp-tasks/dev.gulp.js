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
var merge = require('gulp-merge-json');
var uncache = require('gulp-uncache');
var concat = require('gulp-concat');
var fs = require('fs');
var pkg = require('../package.json');
var combine = require('gulp-scss-combine');

// #######################################################################################  TASKS

/*------------------------------------------------------------------------------------- Task copyHtml
*  Compile the index.html from src to dist folder
*
*  Strip: remove the html comments <!-- -->
*/
// gulp.task('copyHtml', function( ) {
//   gulp.src( 'src/index.html' )
//     .pipe( strip( ) )
//     .pipe( gulp.dest( 'dist' + pkg.custom.projectFolder  ) );
// });


/*------------------------------------------------------------------------------------- Task buildHtml
*  Jade-Pug compiler
*  Compile the index.pug to index.html
*
*  Include the data.json to use the variables to put the content
*/
gulp.task('pug:data', function() {
  return gulp.src([
    './src/view/**/*.json',
    '!./src/view/temp/**/*.json'
  ])
  .pipe(merge({
    fileName: 'temp-data.json',
    edit: (json, file) => {
      // Extract the filename and strip the extension
      var filename = path.basename(file.path),
        primaryKey = filename.replace(path.extname(filename), '');
      return json;
    }
  }))
  .pipe(gulp.dest('./src/view/temp'));
});


gulp.task( 'pug:build', ['pug:data'], function buildHTML( ) {
  fs.readdir('./src/view/pages/', (err, files) => {
    files.filter( (file)=> file.indexOf('.pug') > -1).forEach(file => {
      var pageName = file.replace('.page.pug', '');
      console.log( '>>>> PAGE created: ', pageName )
      buildFile(pageName)
    });
  });
});


function buildFile( filePrefix ){
  gulp.src('./src/view/pages/' + filePrefix +'.page.pug')
  .pipe(pug({
    data:  JSON.parse(fs.readFileSync('./src/view/temp/temp-data.json')),
    pretty: true
  }))
  .pipe( rename( filePrefix + '.html' ) )
  .pipe( gulp.dest( 'dist-pages' ) );
}

function requireUncached( $module ) {
  delete require.cache[ require.resolve( $module ) ];
  // + "?ver=" + new Date().getTime()
  return require( $module );
}



/* ------------------------------------------------------------------------------------- Task dynamicCss
*  Compile the src scss files to style.css
*
*  Filters:
*  outputStyle parameter options: nested, compact, expanded, compressed
*  remove comments
*  rename
*/

gulp.task('scss:build', function () {

  gulp.src('./src/scss/main.scss')
    .pipe( sass( {outputStyle: 'compressed'} ).on( 'error', sass.logError ) )
    .pipe( stripCssComments( ) )
    .pipe( rename( "index.css" ) )
    .pipe( gulp.dest( './dist-pages/assets/css' ) );

  gulp.src(['./src/view/**/*.scss','!./src/view/**/*.partial.scss'])
    .pipe( sass( {outputStyle: 'compressed'} ).on( 'error', sass.logError ) )
    .pipe( stripCssComments( ) )
    .pipe(combine())
    .pipe(concat('view.scss'))
    .pipe( rename( "view.css" ) )
    .pipe( gulp.dest( './dist-pages/assets/css' ) );

});


/* ------------------------------------------------------------------------Task  dynamicJs
*
*  Move all files from src/js to dist/js , except the folder with __ prefix
*/
// gulp.task( 'build:js', function( ){

//   gulp.src([  './src/js/main.js'     ])
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('./dist/' + pkg.custom.projectFolder +'js'));

// });

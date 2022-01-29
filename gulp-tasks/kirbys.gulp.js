const gulp = require('gulp');
const rename = require("gulp-rename");
const through2 = require('through2');

/*
*  Move the kirbys original folder/file Structure
*
*/
// gulp.task('kirbys:move', function( ) {
//   gulp.src( ['src-server/**/*','src-server/**/.*'] )
//     .pipe( gulp.dest( './dist' ) );
// });




/**
 * Extract content between two markers from the selected file
 * @param { pattern_start, pattern_end} params 
 */

function extract_text(params) {
  let { pattern_start, pattern_end } = params;
  return through2.obj(function (file, enc, cb) {
    let str  = file.contents.toString('utf8');
    const regex = new RegExp(`${pattern_start}([\\s\\S]*)${pattern_end}`,'m');
    let m;
    if ((m = regex.exec(str)) !== null) {
      removedPatternsStr = m[0].replace( pattern_start, '').replace( pattern_end, '')
      file.contents = new Buffer( removedPatternsStr );
      return cb(null, file);
    }
  });
};


gulp.task('cms:cut',function(){

  // Header Snippet
  var filePrefix = 'header';
  var targetFile = 'example.html'; // << ------------------------- example.html @todo: change this?
  gulp.src(['./dist-pages/' + targetFile ])
  .pipe(extract_text({
    pattern_start : "<!--@cursor:snippet:header:start-->",
    pattern_end   : "<!--@cursor:snippet:header:end-->"
  }))
  .pipe( rename( filePrefix + '.php' ) )
  .pipe(gulp.dest('dist-cms'))

  // Footer Snippet
  var filePrefix = 'footer';
  var targetFile = 'example.html'; // << ------------------------- example.html @todo: change this?
  gulp.src(['./dist-pages/' + targetFile ])
  .pipe(extract_text({
    pattern_start : "<!--@cursor:snippet:footer:start-->",
    pattern_end   : "<!--@cursor:snippet:footer:end-->"
  }))
  .pipe( rename( filePrefix + '.php' ) )
  .pipe(gulp.dest('dist-cms'))

  // + Snippet

});



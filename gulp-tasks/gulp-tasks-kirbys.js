var gulp = require('gulp');

/*
*  Move the kirbys original folder/file Structure
*
*/
gulp.task('kirbys:move', function( ) {
  gulp.src( ['src-server/**/*','src-server/**/.*'] )
    .pipe( gulp.dest( './dist' ) );
});


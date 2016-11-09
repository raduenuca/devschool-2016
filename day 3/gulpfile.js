var gulp = require('gulp');
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')();

gulp.task('analyze', function(){
    gulp.src(['src/**/*.js', 'gulpfile.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs())
        .pipe($.jscs.reporter())
        .pipe($.jscs.reporter('fail'));
});

gulp.task('inject', function(){
    var injectJs = gulp.src('src/app/**/*.js')
        .pipe($.angularFilesort());

    return gulp.src('src/index.html')
        .pipe(wiredep({exclude: [/jQuery/, /\/bootstrap-css\/.*\.js$/]}))
        .pipe($.inject(injectJs, {relative: true}))
        .pipe(gulp.dest('src'));
});

gulp.task('serve', ['inject', 'analyze'] , function(){
    gulp.src('src')
        .pipe($.serverLivereload({
            livereload: true,
            open: true
        }));
});

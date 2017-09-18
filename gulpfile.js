var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

// En versiones v8.*  chrome://inspect en el navegador
// https://nodejs.org/en/docs/inspector/
gulp.task('debug-old', shell.task('node --inspect --debug-brk main-draw-table.js'));
gulp.task('debug', shell.task('node inspect main-draw-table.js'));

gulp.task('run', shell.task('node main-draw-table.js'));

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha --require should"));

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

function watch() {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    });
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/*.css').on('change', browserSync.reload);
}

exports.watch = watch;
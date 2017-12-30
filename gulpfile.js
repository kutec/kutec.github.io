var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");
	
// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/dist"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
});

gulp.task("default", ["watch"]);
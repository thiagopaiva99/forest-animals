const gulp        = require('gulp')
const sass        = require('gulp-sass')
const notify      = require('gulp-notify')
const concat      = require('gulp-concat')
const pug         = require('gulp-pug')
const minify      = require('gulp-minify')
const browserSync = require("browser-sync").create()

gulp.task('pug', () => 
  gulp.src('src/views/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream())
)

gulp.task("server", () => {
        browserSync.init({
                server: { baseDir: "./dist" }
        })
        
        gulp.watch("./src/views/*.pug", ['pug'])
})

gulp.task("default", ["pug", "server"])

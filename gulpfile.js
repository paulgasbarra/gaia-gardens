import gulp from "gulp";
import ejs from "gulp-ejs";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";
import replace from "gulp-replace";
import imagemin from "gulp-imagemin";
import size from "gulp-size";
import { projects } from "./public/data/projects.js";

gulp.task("ejs", () => {
  return gulp
    .src("views/pages/**/*.ejs")
    .pipe(ejs({ projects: projects })) // Pass data to EJS
    .pipe(replace("/assets/images/", "/images/"))
    .pipe(replace("/assets/scripts/", "/scripts/"))
    .pipe(replace("/assets/css/", "/css/"))
    .pipe(htmlmin({ collapseWhitespace: true })) // Minify HTML
    .pipe(rename({ extname: ".html" })) // Rename file extensions to .html
    .pipe(gulp.dest("dist"));
});

gulp.task("scripts", function () {
  return gulp
    .src("./public/assets/scripts/*.js")
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task("images", function () {
  return gulp
    .src("./public/assets/images/**/*")
    .pipe(
      imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true,
      })
    )
    .pipe(gulp.dest("dist/images"))
    .pipe(size({ title: "images" }));
});

gulp.task("css", function () {
  return gulp.src("./public/css/*").pipe(gulp.dest("dist/css"));
});

gulp.task("default", gulp.series("ejs", "scripts", "images", "css"));

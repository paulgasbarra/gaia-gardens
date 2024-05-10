const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const replace = require("gulp-replace");
const clean = require("gulp-rimraf");

const projects = require("./public/data/projects.json");

gulp.task("clean", [], function () {
  console.log("Clean all files in build folder");
  return gulp.src("build/*", { read: false }).pipe(clean());
});

gulp.task("ejs", () => {
  return gulp
    .src("views/pages/**/*.ejs")
    .pipe(ejs({ projects: projects })) // Pass data to EJS
    .pipe(replace("public/assets/images/", "/dist/images/"))
    .pipe(replace("public/assets/scripts/", "/dist/scripts/"))
    .pipe(replace("public/assets/css/", "/dist/styles/"))
    .pipe(htmlmin({ collapseWhitespace: true })) // Minify HTML
    .pipe(rename({ extname: ".html" })) // Rename file extensions to .html
    .pipe(gulp.dest("dist")); // Output to dist folder
});

gulp.task("scripts", function () {
  return gulp
    .src("./public/assets/scripts") // Adjust the source directory as needed
    .pipe(gulp.dest("dist/scripts")); // Output directory
});

gulp.task("images", function () {
  return gulp
    .src("./public/assets/images") // Adjust the source directory as needed
    .pipe(gulp.dest("dist/images")); // Output directory
});

gulp.task("default", gulp.series("clean", "ejs", "images", "scripts"));

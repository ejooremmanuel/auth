// use this if we must to use ES6 Modules
// const imageM = import("gulp-imagemin").then((mod) => mod.default);
// const imagemin = (...args) => imageM.then((fn) => fn(...args));
// ////////
const imagemin = require("gulp-imagemin");
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

const cssPath = "src/styles/*.css";
const jsPath = "src/js/*.js";
// const jsPath = "src/js/**/*.js"

const copyHTML = () => {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
};

const imgTask = () => {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
};

const jsTask = () => {
  return gulp
    .src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(terser()) // to minify js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"));
};
const cssTask = () => {
  return gulp
    .src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/styles"));
};
const htaccessTask = () => {
  return gulp
    .src("src/.htaccess")
    .pipe(sourcemaps.init())
    .pipe(gulp.dest("dist"));
};
const xmlTask = () => {
  return gulp.src("src/*.xml").pipe(sourcemaps.init()).pipe(gulp.dest("dist"));
};

// export const jsTask = () => {
//   return gulp
//     .src(jsPath)
//     .pipe(sourcemaps.init())
//     .pipe(concat("index.js"))
//     .pipe(terser()) // to minify js
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("dist/js"));
// };
// export const cssTask = () => {
//   return gulp
//     .src(cssPath)
//     .pipe(sourcemaps.init())
//     .pipe(concat("style.css"))
//     .pipe(postcss([autoprefixer(), cssnano()]))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("dist/css"));
// };

// to automatically watch task every second
module.exports.watchTask = () => {
  gulp.watch(
    ["src/*.html", cssPath, jsPath],
    { interval: 1000 },
    gulp.parallel(copyHTML, cssTask, jsTask)
  );
};

module.exports.build = gulp.parallel(
  copyHTML,
  imgTask,
  jsTask,
  cssTask,
  xmlTask,
  htaccessTask
);

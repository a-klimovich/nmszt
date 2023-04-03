const { src, dest } = require("gulp");
const path = require('./config/path.js');
const processes = require('./config/processes.js');

// PLAGINS
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

const script = () => {
  return src(path.script.src)
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(gulpIf(processes.isProd, minify()))
    .pipe(dest(path.script.build))
};

const vendorsScript = () => {
  return src(path.vendorsJS.src)
    .pipe(babel())
    .pipe(concat('vendors.js'))
    .pipe(gulpIf(processes.isProd, minify()))
    .pipe(dest(path.vendorsJS.build))
};

const headConnect = () => {
  return src(path.headConnect.src)
    .pipe(gulpIf(processes.isProd, minify()))
    .pipe(dest(path.headConnect.build))
};

module.exports = {
  script,
  vendorsScript,
  headConnect
};
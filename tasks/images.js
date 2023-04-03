const { src, dest } = require("gulp");
const path = require('./config/path.js');
const processes = require('./config/processes.js');

// PLAGINS
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const gulpIf = require('gulp-if');

const images = () => {
  return src(path.images.src)
    .pipe(newer(path.images.build))
    .pipe(gulpIf(processes.isProd, imagemin()))
    .pipe(dest(path.images.build))
};

module.exports = images;
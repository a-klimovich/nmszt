const { series, parallel, watch } = require("gulp");
const browserSync = require('browser-sync').create();
const path = require('./tasks/config/path');
const processes = require('./tasks/config/processes');

// TASKS
const clear = require('./tasks/clear');
const html = require('./tasks/html');
const stylesTasks = require('./tasks/scss');
const scriptTasks = require('./tasks/script');
const fonts = require('./tasks/fonts');
const images = require('./tasks/images');

// SERVER
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    }
  })
};

// TASK WATCHER
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload)
  watch(path.scss.watch, stylesTasks.scss).on('all', browserSync.reload)
  watch(path.script.watch, scriptTasks.script).on('all', browserSync.reload)
  watch(path.fonts.watch, fonts).on('all', browserSync.reload)
  watch(path.images.watch, images).on('all', browserSync.reload)
};

const build = series(
  clear,
  parallel(
    html,
    stylesTasks.scss,
    scriptTasks.script,
    fonts,
    images,
    scriptTasks.headConnect,
    scriptTasks.vendorsScript,
    stylesTasks.vendorsStyles
  ),
);

const dev = series(
  build,
  parallel(watcher, server),
);

exports.html = html;
exports.scss = stylesTasks.scss;
exports.script = scriptTasks.script;
exports.fonts = fonts;
exports.images = images;

exports.default = processes.isProd
  ? build
  : dev;
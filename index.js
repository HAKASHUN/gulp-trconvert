var through = require("through2"),
  gutil = require("gulp-util"),
  Converter = require("trconvert");

module.exports = function (param) {
  "use strict";

  param = param || {};
  param.ratio = param.ratio || 1;
  param.base = param.base || 2;

  // see "Writing a plugin"
  // https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
  function trconvert(file, enc, callback) {
    /*jshint validthis:true*/

    // Do nothing if no contents
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {

      // http://nodejs.org/api/stream.html
      // http://nodejs.org/api/child_process.html
      // https://github.com/dominictarr/event-stream

      // accepting streams is optional
      this.emit("error",
        new gutil.PluginError("gulp-trconvert", "Stream content is not supported"));
      return callback();
    }

    // check if file.contents is a `Buffer`
    if (file.isBuffer()) {

      var converted = new Converter(file.path, param.ratio, param.base).convert();
      file.contents = new Buffer(converted);

      this.push(file);

    }
    return callback();
  }

  return through.obj(trconvert);
};

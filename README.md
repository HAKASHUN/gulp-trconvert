(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-trconvert
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> trconvert plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-trconvert` as a development dependency:

```shell
npm install --save-dev gulp-trconvert
```

Then, add it to your `gulpfile.js`:

```javascript
var trconvert = require("gulp-trconvert");

gulp.src("./src/*.ext")
	.pipe(trconvert({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### trconvert(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-trconvert
[npm-image]: https://badge.fury.io/js/gulp-trconvert.png

[travis-url]: http://travis-ci.org/HAKASHUN/gulp-trconvert
[travis-image]: https://secure.travis-ci.org/HAKASHUN/gulp-trconvert.png?branch=master

[coveralls-url]: https://coveralls.io/r/HAKASHUN/gulp-trconvert
[coveralls-image]: https://coveralls.io/repos/HAKASHUN/gulp-trconvert/badge.png

[depstat-url]: https://david-dm.org/HAKASHUN/gulp-trconvert
[depstat-image]: https://david-dm.org/HAKASHUN/gulp-trconvert.png

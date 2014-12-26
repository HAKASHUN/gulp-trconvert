# gulp-trconvert

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
	  ratio: 1,
	  base: 2
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### trconvert(options)

#### options.ratio
Type: `Number`  
Default: 1

convert ratio. path caluculated by this rate. ( default 1 )

#### options.base
Type: `Number`  
Default: 2

convert base ratio (default ratio 2)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-trconvert
[npm-image]: https://badge.fury.io/js/gulp-trconvert.png

[travis-url]: http://travis-ci.org/HAKASHUN/gulp-trconvert
[travis-image]: https://secure.travis-ci.org/HAKASHUN/gulp-trconvert.png?branch=master

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const jshint = require("gulp-jshint");
const del = require("del");

var config = {
	distFolder: "dist",
	jsFile: "src/js/fui.js",
	finalName: "fui.js"
};

const js = gulp.series(jsLint, jsMinify);
const build = js;

exports.default = gulp.series(clean, build);
exports.build = build;
exports.clean = clean;
exports.js = js;
exports.lint = jsLint;

function clean(done) {
	return del(config.distFolder);
}

function jsLint() {
	return gulp.src(config.jsFile)
				.pipe(jshint())
				.pipe(jshint.reporter("default"));
}

function jsMinify() {
	return gulp.src(config.jsFile)
				.pipe(gulp.dest(config.distFolder))
				.pipe(uglify())
				.pipe(rename({ suffix: ".min" }))
				.pipe(gulp.dest(config.distFolder));
}


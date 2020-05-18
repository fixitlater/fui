const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const jshint = require("gulp-jshint");
const del = require("del");
const gzip = require('gulp-gzip');
 
var config = {
	distFolder: "dist",
	js: {
			main: "src/js/fui.js",
			globals: "src/js/fui.globals.js"
		},
	finalName: "fui.js",
	noConflictName: "fui.nc.js"
};
config.js.all = [config.js.main, config.js.globals];

const js = gulp.series(jsLint, jsBundle, jsNoConflictDist, jsMinify, jsCompress);
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
	return gulp.src(config.js.all)
				.pipe(jshint())
				.pipe(jshint.reporter("default"));
}

function jsMinify() {
	var sources = config.distFolder + "/*.js";

	return gulp.src(sources)
				.pipe(rename({ suffix: ".min" }))
				.pipe(uglify({ compress: { drop_console: true }}))
				.pipe(gulp.dest(config.distFolder));
}

function jsNoConflictDist() {
	return gulp.src(config.js.main)
				.pipe(rename(config.noConflictName))
				.pipe(gulp.dest(config.distFolder));
}

function jsBundle() {
	return gulp.src(config.js.all)
				.pipe(concat(config.finalName))
				.pipe(gulp.dest(config.distFolder));
}

function jsCompress() {
	var sources = config.distFolder + "/*.js";
	return gulp.src(sources)
				.pipe(gzip())
				.pipe(gulp.dest(config.distFolder));
}
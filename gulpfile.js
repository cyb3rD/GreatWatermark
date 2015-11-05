var gulp = require("gulp"),
	browserSync = require ("browser-sync"),
	compass = require("gulp-compass"),
	jade = require ("gulp-jade"),
	plumber = require("gulp-plumber");

// paths & settings
var paths = {
	browserSync : {
		serverPort 	: 3000,
		baseDir 	: 'app',
		watchPaths 	: ['*.html', 'css/*.css', 'js/*.js', 'php/*.php']
	},

	watchDirs : {
		watchPaths	: ['app/*.html', 'app/js/**/*.js', 'app/css/**/*.css', 'app/php/**/*.php']
	},

	scss : {
		location	: 'app/styles/**/*.scss',
		entryPoint	: 'app/css/main.css'
	},

	compass : {
		configFile	: 'config.rb',
		cssFolder	: 'app/css',
		scssFolder	: 'app/styles',
		imgFolder	: 'app/img'
	},

	jade: {
		location	: 'app/layout/**/*.jade',
		compiled	: 'app/layout/_pages/*.jade',
		destination : 'app'
		}
}

// JADE
gulp.task('jade', function() {
	gulp.src(paths.jade.compiled)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t', // format code, remove tabs
		}))
		.pipe(gulp.dest(paths.jade.destination));
});

// Server (BrowserReload)
gulp.task('server', function () {
	browserSync.init({
		port : paths.browserSync.serverPort,
		// Tunnel for access from remote PC
		// tunnel: 'samplestore',
		proxy : 'watermark/app'
	});
});

// Scss + compass
gulp.task('compass', function() {
	gulp.src(paths.scss.location)
		.pipe(plumber())
		.pipe(compass({
			config_file: paths.compass.configFile,
			css: paths.compass.cssFolder,
			sass: paths.compass.scssFolder,
			image: paths.compass.imgFolder
		}));
});

// Watch (Jade + BrowserSync reload
gulp.task('watch', function () {
	gulp.watch(paths.jade.location, ['jade']);
	gulp.watch(paths.scss.location, ['compass']);

	gulp.watch (paths.watchDirs.watchPaths).on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['jade', 'compass', 'server', 'watch']);
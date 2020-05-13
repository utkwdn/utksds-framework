// Load plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sassdoc = require('sassdoc');
var uglify = require('gulp-uglify');



// Set options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};


// Set variables
var input         = './src/style.scss';
var inputscripts  = './src/js/utk.js';
var output        = './build/assets/css';



// Compile Stylesheets
gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

//   // Compile Scripts
//   gulp.task('scripts', function () {
//       return gulp.src (
//             ['ut_components/js/ut-enhancer.js',
//             'bower_components/bootstrap/js/dist/util.js',
//             'bower_components/bootstrap/js/dist/alert.js',
//             'bower_components/bootstrap/js/dist/collapse.js',
//             'bower_components/bootstrap/js/dist/tab.js',
//             'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
//             'bower_components/picturefill/dist/picturefill.js',
//             'bower_components/Magnific-Popup-master/dist/jquery.magnific-popup.min.js',
//             'ut_components/js/ut-scripts.js',
//             'ut_components/js/slick.js',
//             'ut_components/js/main.js']
//     		)
//   		.pipe(concat('utk.js'))
//   		.pipe(uglify())
//   		.pipe(gulp.dest('./docs/assets/js')
//       );
//   });
//   


gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
  .on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });


//  gulp.watch('./ut_components/js/*.js', gulp.series('scripts'))
//  .on('change', function(event) {
//    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//  });
});

gulp.task('default', gulp.series('sass','watch'));



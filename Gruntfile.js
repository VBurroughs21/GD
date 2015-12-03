module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-uncss');
  uncss: {
  dist: {
    src: ['', ''],
    dest: 'dist/css/tidy.css'
    options: {
      report: 'min' // optional: include to report savings
    }
  }
}


//  <!-- Stylesheets we would like cleaned -->
// <!-- build:css css/tidy.css -->
// <!-- just here to make sure we reference css/tidy.css -->
// <link rel="stylesheet" href="css/bootstrap.css">
// <!-- /build -->
// <!-- Stylesheets we want to minify as usual -->
// <!-- build:css css/other.css -->
// <link rel="stylesheet" href="css/main.css">
// <link rel="stylesheet" href="css/normalize.css">
// <!-- /build -->
  

//files to process
  processhtml: {
  dist: {
    files: {
      'dist/index.html': ['app/index.html'],
      'dist/about.html': ['app/about.html']
    }
  }
}
};
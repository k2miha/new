module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-postcss');
  grunt.initConfig({
    postcss: {
      style: {
        files: {
            "css/style.css": "postcss/style.css"
        }
      }
    }
  });
};

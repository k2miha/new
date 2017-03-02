module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
                css: {
                    files: ['postcss/style.css'],
                    tasks: ['postcss'],
                    options: {
                        spawn: false,
                    }
                }
            },
    postcss: {
      style: {
        files: {
            "css/style.css": "postcss/style.css"
        }
      }
    }
  });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
};

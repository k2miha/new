module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
                css: {
                    files: ['postcss/**/*.css'],
                    tasks: ['postcss'],
                    options: {
                        spawn: false,
                        livereload: true,
                    }
                }
            },
    postcss: {
      style: {
        files: {
            "css/style.css": "postcss/style.css"
        }
      }
    },
    browserSync: {
      bsFiles: {
        src : ['css/*.css', '*.html']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    }
  });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('start', ['browserSync', 'watch']);
};

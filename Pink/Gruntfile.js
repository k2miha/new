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
  		options: {
  			processors: [
  				require('precss')()
  			]
  		},
  		dist: {
        src: 'postcss/style.css',
        dest: 'css/style.css'
  		}
  	},


    browserSync: {
      bsFiles: {
        src : ['css/*.css', '*.html', 'img/*.*']
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

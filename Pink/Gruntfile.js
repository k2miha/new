module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    clean: {
      build: ["build"]
   },
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
           dest: "build"
          }]
        }
    },
    postcss: {
      style: {
      options: {
        processors: [
          require('precss')(),
          require("autoprefixer")({browsers:
             [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
              ]}),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      dist: {
        src: 'postcss/style.css',
        dest: 'build/css/style.css'
      }
     }
    },
     csso: {
          style: {
                    options: {
                        report: "gzip"
                           },
                           files: {
                             "build/css/style.min.css": ["build/css/style.css"]
                            }
                          }
                    },
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
    browserSync: {
      bsFiles: {
        src : ['css/*.css', '*.html', 'img/*.*', 'js/*.js']
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

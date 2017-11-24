'use strict';

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
      },
        html: {
          files: [{
          expand: true,
          src: ["*.html"],
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
    svgstore: {
            options: {
               svg: {
                  style: "display: none"
               }
            },
             symbols: {
               files: {
                  "build/img/symbols.svg": ["img/icons/*.svg"]
                }
              }
        },
    svgmin: {
          symbols: {
              files: [{
                expand: true,
                src: ["build/img/icons/*.svg"]
              }]
          }
    },
    imagemin: {
          images: {
            options: {
              optimizationLevel: 3
            },
            files: [{
              expand: true,
              src: ["build/img/**/*.{png,jpg,gif}"]
             }]
            }
    },
    browserSync: {
      server: {
        bsFiles: {
          src : ['build/css/*.css', 'build/*.html', 'build/img/*.*', 'build/js/*.js']
      },
      options: {
        server: "build",
        watchTask: true
        }
      }
    },
    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
      style: {
          files: ['postcss/**/*.css'],
          tasks: ['postcss', 'csso'],
      }
  }
  });
  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("symbols", ["svgmin", "svgstore"]);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'postcss',
    'csso',
    'symbols',
    'imagemin'
   ]);
};

'use strict';

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    clean: {
      build: ["build"],
      img: ["build/img/icons"],
      css: ["build/css/style.css"]
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
          src: ["build/*.html"],
          dest: "./"
          }]
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
        dest: 'build/css/style.css'
      },
     style: {
       options: {
         processors: [
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
         src: "build/css/*.css"
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
          src : ['postcss/css/*.css', 'build/*.html', 'build/img/*.*', 'build/js/*.js']
      },
      options: {
        server: ".",
        watchTask: true
        }
      }
    },
    watch: {
      html: {
        files: ["build/*.html"],
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
  grunt.registerTask("build", [
    "clean:build",
    "copy:build",
    "postcss",
    "csso",
    "symbols",
    "imagemin",
    "clean:img",
    "clean:css"
  ]);
};

"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);
  grunt.initConfig({
    clean: {
      build: ["build"],
      img: [
       "build/img/icons",
       "build/img/icons-competition",
       "build/img/icons-photo",
       "build/img/icons-universal"
     ],
     js: [
      "build/js/hamburger.js",
      "build/js/modal.js",
      "build/js/buttonTumbler.js",
      "build/js/sliderTumbler.js"
    ]
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
          flatten: true,
          src: ["build/*.html"],
          dest: "./"
          }]
      }
    },
    postcss: {
      options: {
        processors: [
          require("precss")()
        ]
      },
      dist: {
        src: "postcss/style.css",
        dest: "build/css/style.css"
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
                  "build/img/symbols.svg": ["img/icons/*.svg"],
                  "build/img/symbols-competition.svg": ["img/icons-competition/*.svg"],
                  "build/img/symbols-photo.svg": ["img/icons-photo/*.svg"],
                  "build/img/symbols-universal.svg": ["img/icons-universal/*.svg"]
                }
              }
        },
    svgmin: {
          symbols: {
              files: [{
                expand: true,
                src: ["build/img/**/*.svg"]
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
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: "js",
          src: "**/*.js",
          dest: "build/js",
          ext: ".min.js"
      }]
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src : ["build/css/*.css", "build/*.html", "build/img/*.*", "build/js/*.js"]
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
          files: ["postcss/**/*.css"],
          tasks: ["postcss", "csso"]
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
    "uglify",
    "clean:img",
    "clean:js"
  ]);
};

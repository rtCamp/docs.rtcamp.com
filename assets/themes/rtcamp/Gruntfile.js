'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'js/*.js',
        '!js/scripts.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true,
          // Source maps are available, but require Sass 3.3.0 to be installed
          // https://github.com/gruntjs/grunt-contrib-sass#sourcemap
          sourcemap: false
        },
        files: {
          'css/main.min.css': [
            'sass/app.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [
            'js/plugins/bootstrap/transition.js',
            'js/plugins/bootstrap/alert.js',
            'js/plugins/bootstrap/button.js',
            'js/plugins/bootstrap/carousel.js',
            'js/plugins/bootstrap/collapse.js',
            'js/plugins/bootstrap/dropdown.js',
            'js/plugins/bootstrap/modal.js',
            'js/plugins/bootstrap/tooltip.js',
            'js/plugins/bootstrap/popover.js',
            'js/plugins/bootstrap/scrollspy.js',
            'js/plugins/bootstrap/tab.js',
            'js/plugins/bootstrap/affix.js',
            'js/plugins/bootstrap/lightbox.js',
            'js/plugins/*.js',
            'js/_*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
        }
      }
    },
    watch: {
      sass: {
        files: [
          'sass/*.scss',
          'sass/bootstrap/*.scss',
          'sass/rtcamp/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'css/main.min.css',
          'js/scripts.min.js'
        ]
      }
    },
    clean: {
      dist: [
        'css/main.min.css',
        'js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify',
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};

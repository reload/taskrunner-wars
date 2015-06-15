module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss', '**/*.scss'],
          dest: 'css',
          ext: '.css',
          extDot: 'last'
        }],
        options: {
          includePaths: require('node-bourbon').includePaths
        }
      }
    },

    coffee: {
      compile: {
        files: {
          'js/test.js': 'coffeescript/test.coffee'
        }
      }
    },

    watch: {
      scss: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      },

      css: {
        files: ['css/*.css'],
        options: {
          livereload: true
        }
      },

      coffee: {
        files: ['coffeescript/*.coffee'],
        tasks: ['coffee']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'sass',
    'coffee',
    'watch'
  ]);
};

'use strict';

module.exports = (grunt) ->
  grunt.initConfig
    sass:
      options:
        sourceMap: true
        outputStyle: 'expanded'

      dist:
        files:
          'css/test.css':'sass/test.scss'

    coffee:
      compile:
        files:
          'js/test.js': ['coffeescript/test.coffee']

    watch:
      css:
        files: ['sass/*.scss'],
        tasks: ['sass']

      coffee:
        files: ['coffeescript/*.coffee'],
        tasks: ['coffee']

  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['sass', 'coffee', 'watch'])

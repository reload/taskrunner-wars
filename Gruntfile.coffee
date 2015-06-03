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

    watch:
      css:
        files: ['sass/*.scss'],
        tasks: ['sass']

  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['sass', 'watch'])

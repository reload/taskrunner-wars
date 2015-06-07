module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes and trigger compass with livereload on CSS files.
    watch: {
      scss: {
        options: {
          livereload: false
        },
        files: [
          'sass/*.scss',
          'sass/*/*.scss'
        ],
        tasks: ['compass:prod']
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true
        }
      }
    },

    // Compass and SCSS.
    compass: {
      options: {
        sassDir: 'sass',
        imagesDir: 'images',
        javascriptsDir: 'js',
        fontsDir: 'css/fonts',
        assetCacheBuster: 'none'
      },
      prod: {
        options: {
          environment: 'production',
          outputStyle: 'compact',
          force: true,
          cssDir: 'css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('build', [
    'compass:prod'
  ]);

  grunt.registerTask('default', [
    'compass:prod',
    'watch'
  ]);
};

module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({ 

    clean: ['dist/',],

    less: {
      style: {
        files: {
          "app/main.css": "app/less/main.less"
        }
      }
    },

    concat: {      
        dist: {
          src: ['app/js/common.js', 'app/libs/animate/wow.js','app/libs/bootstrap/js/bootstrap.min.js','app/libs/owlcarousel/owlcarousel.js','app/libs/magnific-popup/jquery.magnific-popup.js'],
          dest: 'app/js/compiled.js'

      }  
    },

    uglify: {      
        build: {
          src: ['app/js/compiled.js'],
          dest: 'dist/js/compiled.min.js'

      }  
    },

    cssmin: {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
            },
            target: {
                files: {
                    'app/compiled.css': ['app/main.css', 'app/css/_media.css', 'app/libs/owlcarousel/owlcarousel.css', 'app/libs/animate/animate.css', 'app/libs/bootstrap/css/bootstrap.min.css', 'app/libs/magnific-popup/magnific-popup.css']
              }
          }
      },
      cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'app',
              src: ['*.css', '!*.min.css', '!_media.css', '!_fonts.css'],
              dest: 'dist',
              ext: '.min.css'
              }]
          }
        },

      imagemin: {
            png: {
              options: {
                optimizationLevel: 3
              },
              files: [{                  
                  expand: true,                 
                  cwd: 'app/img/',
                  src: ['**/*.png'],                 
                  dest: 'dist/img/',
                  ext: '.png'
                }
              ]
            },
            jpg: {
              options: {
                progressive: true
              },
              files: [{                  
                  expand: true,                 
                  cwd: 'app/img/',
                  src: ['**/*.jpg'],                 
                  dest: 'dist/img/',
                  ext: '.jpg'
                }
              ]
            }
          },    

       copy: {
            main: {
                files: [
                    {
                        expand: true,
                            cwd: 'app/', 
                            src: ['index.html', 'fonts/*', 
                                'mail.php', 'libs/jquery/*', 
                                'libs/modernizr/*', 'libs/respond/*', 
                                'libs/html5shiv/*'
                              ], 
                            dest: 'dist/',                            
                    }
                ]
            }
        },  

      watch: {          
  
    	  style: {

    	  	files: ['app/less/components/*.less'],
    	    tasks: ['less'],
    	    options: {
    	      spawn: false,
    	    },
    	  },
    	},

	
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.task.registerTask('build', ['clean','uglify', 'cssmin','imagemin', 'copy']);
  grunt.registerTask('default', ['less','watch']); 

};
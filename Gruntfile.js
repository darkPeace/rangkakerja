"use strict";

// grunt wrapper

module.exports = function (grunt) {
	/* grunt JIT Compiler remove unnecessaey grunt.loadNpmTasks */
	require('jit-grunt')(grunt); 
	// need something to rewrite html [src] before publishing /* NOTE */
	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			test: {
				files: {
					'src/min/a.min.js': ['src/**/*.js']
				}
			}
		},

		cssmin: {
			test: {
				files: {
					'src/min/a.min.css': ['src/**/*.css']
				}
			}
		},

		imagemin: {
			img: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'rel'
				}]
			}
		},

		htmlmin: {
			html: {
				options: {
					html5: true,
					removeComments: true,
					removeEmptyElements: true,
					collapseWhitespace: true
				},

				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.html'],
					dest: 'rel',
				}],
			},
		},

		clean: {
			js: ['rel/js/*.js'],
			html: ['rel/**/*.html'],
			css: ['rel/css/*.css'],
			img: ['rel/img/*.{jpg,png,gif}']
		},

		wiredep: {
			task: {
				src: [
					'index.html'
				],

				options: {}
			}
		},

		connect: {
			options: {
				port: 9050,
				protocol: 'http',
				hostname: 'localhost',
				livereload: 38357,
				// keepalive: true
			},
			test:{
				options: {
					base: '',
					open: {
						app: 'Firefox'
					}
				},
			}
		},

		copy: {
			htm: {
				files:[{
					expand:false,
					src: 'src/index.html',
					dest: 'index.html'
				}]
			},
			main: {
				files: [{
					expand: true,
					src: 'src/index.html',
					dest: 'rel/index.html'
				},{
					expand: true,
					src: 'src/min',
					dest: 'rel/min'
				}]
			}
		},

		watch:{
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
			grunT: {
				files: ['Gruntfile.js'],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['copy:htm', 'wiredep'],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
			js: {
				files: ['src/**/*.js', '!src/min/*.min.js'],
				tasks: [''],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
			css: {
				files: ['src/**/*.css', '!src/min/*.min.css'],
				tasks: [''],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish'),
			},
			raw: {
				options: {
					ignores: ['src/min/a.min.js'],
				},
				files: {
					src:['src/**/*.js']
				},
			},
			min: ['src/min/a.min.js'],
			rel: ['rel/**/*.js']
		},

		includeFiles: {
		  options: {
		    basePath: '',
		    baseUrl: 'src',
		    templates: {
		      html: {
		        js: '<script src="{filePath}"></script>',
		        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
		    	}
		    }
		  },
		  myTarget: {
		    files: {
		      'index.html': 'src/index.html'
		    }
		  }
		}

	});

	grunt.registerTask('miniall','minify All src/ folder', [
		'uglify', 
		'cssmin', 
		'htmlmin', 
		'imagemin'
	]);

	grunt.registerTask('test','serve the files', [
		'copy:htm',
		'wiredep',
		'connect:test',
		'watch'
	]);
};
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: ['Source/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
				}
			}
		},
		sass: {
			dist: {
				files: [
				{
					expand: true,
					cwd: 'Source/css/sass',
					src: ['**/*.scss'],
					dest: 'Source/css',
					ext: '.css'
				}
				]
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: {
					'Runtime/js/experience.js': 'Runtime/js/experience.js',
					'Runtime/js/app.js': 'Runtime/js/app.js'
				}
			}
		},
		clean: {
			pre: ["Runtime/"],
			post: 
				[
					"Source/css/screen.min.css",
					"Source/js/app.min.js",
					"Runtime/css/screen.css",
					"Runtime/css/sass/",
					"Runtime/js/experience.js",
					"Runtime/js/app.js"
				]
		},
		copy: {
			target: {
				files: [
					{expand: true, cwd: 'Source', src: ['**'], dest: 'Runtime'}
				]
			}
		},
		uglify: {
			my_target: {
				files: {
					'Runtime/js/app.min.js': [
						'Runtime/js/experience.js',
						'Runtime/js/app.js'
					]
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'Runtime/css/screen.min.css': [
						'Runtime/css/screen.css'
					]
				}
			}
		},
		usemin: {
			html: ['Runtime/index.html'],
			options: {
				dirs: ['Runtime']
			}
		},
		imagemin: {
			main: {
				files: [{
					expand: true,
					cwd: 'Source/',
					src: ['/**/*.{png,jpg,gif}'],
					dest: 'Runtime/'
				}]
			}
		},
		hashres: {
			// Global options
			options: {
				fileNameFormat: '${name}.${ext}?${hash}',
				renameFiles: false
			},
			// hashres is a multitask. Here 'prod' is the name of the subtask. You can have as many as you want.
			main: {
				// Files to hash
				src: [
					'Runtime/js/app.min.js',
					'Runtime/css/screen.min.css'
				],
				// File that refers to above files and needs to be updated with the hashed name
				dest: [
					'Runtime/index.html',
					'Runtime/css/screen.min.css'
				]
			}
		}
	});

	// Load the needed plugins
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-hashres');


	// Default task(s).
	grunt.registerTask('default',           ['clean:pre','sass','newer:copy','babel','newer:uglify','newer:cssmin','usemin','hashres:main','clean:post']);
	grunt.registerTask('sprites',           ['clean:pre','sprite:main']);
	grunt.registerTask('deploy',  			['clean:pre','sass','newer:copy','babel','newer:uglify','newer:cssmin','usemin','hashres:main','clean:post','imagemin']);

};
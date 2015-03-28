'use strict';
module.exports = function (grunt) {
    // Show elapsed time at the end
    require('time-grunt')(grunt);
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        mochacov: {
            options: {
                reporter: 'html-cov',
                output: "report.html",
                coveralls: {
                    serviceName: 'travis-ci'
                },
                instrument: true
            },
            all: ['test/**/*.js']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            gruntfile: {
                src: ['Gruntfile.js']
            },
            js: {
                src: ['*.js']
            },
            test: {
                src: ['test/**/*.js']
            }
        },
        mochacli: {
            options: {
                reporter: 'nyan',
                bail: false
            },
            all: ['test/**/*.js']
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            js: {
                files: '<%= jshint.js.src %>',
                tasks: ['jshint:js', 'mochacli']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'mochacli']
            }
        }
    });

    grunt.registerTask('default', ['test', 'coverage']);
    grunt.registerTask('test', ['jshint', 'mochacli']);
    grunt.registerTask('coverage', ['mochacov']);

    grunt.registerTask('travis', ['test']);
};

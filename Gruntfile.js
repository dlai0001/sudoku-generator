'use strict';
module.exports = function (grunt) {
    // Show elapsed time at the end
    require('time-grunt')(grunt);
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        mochacov: {
            local: {
                options: {
                    reporter: 'html-cov',
                    output: "report.html",
                    coveralls: false,
                    instrument: true
                },
                all: ['test/**/*.js']
            },
            travis: {
                options: {
                    reporter: 'travis-cov',
                    coveralls: false,
                    instrument: true
                },
                all: ['test/**/*.js']
            }
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
                bail: false
            },
            all: ['test/**/*.js']
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile']
            },
            js: {
                files: 'src/**/*.js',
                tasks: ['jshint:js', 'mochacli']
            },
            test: {
                files: 'test/**/*.js',
                tasks: ['jshint:test', 'mochacli']
            }
        }
    });

    grunt.registerTask('default', ['test', 'coverage']);
    grunt.registerTask('test', ['jshint', 'mochacli']);
    grunt.registerTask('coverage', ['mochacov:local']);

    grunt.registerTask('travis', ['test','mochacov:travis']);
};

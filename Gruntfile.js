'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-exec');

    var SOURCE_DIR = 'public'

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            tmp: ['tmp/**/*'],
            deploy: [SOURCE_DIR + '/**/*']
        },
        exec: {
            genCommits:{
                cmd:"/bin/sh commits.sh"
            },
            buildContent: {
                cmd: "hugo -v",
            }
        },
        htmlmin: {                                          // Task
            dist: {                                         // Target
                options: {                                  // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                },
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: SOURCE_DIR,      // Src matches are relative to this path.
                        src: ['**/*.html'], // Actual pattern(s) to match.
                        dest: SOURCE_DIR,   // Destination path prefix.
                    }],
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0, 
            },
            target: {
                 files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: SOURCE_DIR,      // Src matches are relative to this path.
                        src: ['**/*.css'], // Actual pattern(s) to match.
                        dest: SOURCE_DIR,   // Destination path prefix.
                    }],
            }
        },
        'gh-pages': {
            options: {
                branch: process.env.DEPLOY_BRANCH,
                base: SOURCE_DIR,
            },
            publish: {
                options: {
                    repo: 'https://' + process.env.REPO,
                    message: 'publish gh-pages (cli)'
                },
                src: ['**/*']
            },
            deploy: {
                options: {
                    user: {
                        name: process.env.USER,
                        email: process.env.EMAIL,
                    },
                    repo: 'https://' + process.env.GH_TOKEN + '@' + process.env.REPO,
                    message: '[ci skip] deploy from ' + process.env.USER + ' by travis' + getDeployMessage(),
                    //With silent true log messages are suppressed and error messages are sanitized.
                    silent: false
                },
                src: ['**/*']
            }
        }
    });

    // get a formatted commit message to review changes from the commit log
    // github will turn some of these into clickable links
    function getDeployMessage() {
        var ret = '\n\n';
        if (process.env.TRAVIS !== 'true') {
            ret += 'missing env vars for travis-ci';
            return ret;
        }
        ret += 'branch:       ' + process.env.TRAVIS_BRANCH + '\n';
        ret += 'SHA:          ' + process.env.TRAVIS_COMMIT + '\n';
        ret += 'range SHA:    ' + process.env.TRAVIS_COMMIT_RANGE + '\n';
        ret += 'build id:     ' + process.env.TRAVIS_BUILD_ID + '\n';
        ret += 'build number: ' + process.env.TRAVIS_BUILD_NUMBER + '\n';
        return ret;
    }

    grunt.registerTask('check-deploy', function () {
        // need this
        this.requires(['build']);

        // only deploy under these conditions
        if (process.env.TRAVIS === 'true' && process.env.TRAVIS_SECURE_ENV_VARS === 'true' && process.env.TRAVIS_PULL_REQUEST === 'false') {
            grunt.log.writeln('executing deployment');
            // queue deploy
            grunt.task.run('gh-pages:deploy');
        }
        else {
            grunt.log.writeln('skipped deployment');
        }
    });

    grunt.registerTask('prep', 'Clean-up project', [
        'clean', 
    ]);

    grunt.registerTask('build', 'Rebuild locally', [
        'prep',
        'exec:genCommits',
        "exec:buildContent",
        'htmlmin:dist',
        'cssmin'
    ]);

    grunt.registerTask('publish', 'Publish from CLI', [
        'build',
        'gh-pages:publish'
    ]);

    grunt.registerTask('deploy', 'Publish from Travis', [
        'build',
        'check-deploy'
    ]);

    // per convention set a test task
    grunt.registerTask('test', ['build']);

    grunt.registerTask('default', ['test']);
};

module.exports = function(grunt) {
    var dir = {};
    dir.src = 'src';
    dir.dist = 'dist';

    grunt.initConfig({
        dir: dir,
        clean: [dir.dist],
        exec: {
            ts: {
                cmd: 'npx tsc'
            },
            main: {
                cmd: 'node' + dir.dist + '/main.js'
            },
            run: {
                cmd: 'node ' + dir.dist + '/server.js'
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {expand: true, cwd: dir.src, src: [ '**.html'], dest: dir.dist + '/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('build', [
        'clean',
        'copy',
        'exec:ts'
    ]);

    grunt.registerTask('run', [
        'exec:run'
    ]);
};
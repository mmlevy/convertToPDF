module.exports = function(grunt) {
    let dir = {};
    dir.src = 'src';
    dir.dist = 'dist';

    grunt.initConfig({
        dir: dir,
        clean: [dir.dist],
        exec: {
            ts: {
                cmd: 'npx tsc'
            },
            run: {
                cmd: 'node ' + dir.dist + '/server.js'
            }
        },
        copy: {
            main: {
                files: [
                    // Copy html
                    {expand: true, cwd: dir.src, src: [ '**/**.html', '**.css'], dest: dir.dist + '/'},
                    // Copy front-end libs
                    {expand: true, cwd: 'node_modules/bootstrap', src: [ 'dist/**'], dest: dir.dist + '/lib/bootstrap'},
                    {expand: true, cwd: 'node_modules/angular', src: [ '**.js', '**.css'], dest: dir.dist + '/lib/angular'},
                    {expand: true, cwd: 'node_modules/angular-ui-router/release', src: [ '**.js'], dest: dir.dist + '/lib/angular-ui-router'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-include-source');

    // TODO: Add some sort of "watch" task

    grunt.registerTask('build', [
        'clean',
        'copy',
        'exec:ts'
    ]);

    grunt.registerTask('run', [
        'exec:run'
    ]);
};
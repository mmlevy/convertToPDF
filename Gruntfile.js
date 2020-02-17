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
                    {expand: true, cwd: dir.src, src: [ '**/**.html'], dest: dir.dist + '/'},
                    // Copy front-end libs
                    {expand: true, cwd: 'node_modules/bootstrap', src: [ 'dist/**'], dest: dir.dist + '/lib/bootstrap'},
                    {expand: true, cwd: 'node_modules/angular', src: [ '**.js', '**.css'], dest: dir.dist + '/lib/angular'},
                    {expand: true, cwd: 'node_modules/angular-ui-router/release', src: [ '**.js'], dest: dir.dist + '/lib/angular-ui-router'},
                    {expand: true, cwd: 'node_modules/angular-toastr/dist', src: [ '**.js', '**.css'], dest: dir.dist + '/lib/angular-toastr'},
                    {expand: true, cwd: 'node_modules/angular-animate', src: [ '**.js'], dest: dir.dist + '/lib/angular-animate'}
                ]
            }
        },
        less : {
            development: {
                files: [{
                    expand: true,
                    cwd: dir.src,
                    src: ['**/*.less'],
                    dest: dir.dist,
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-less');

    // TODO: Add some sort of "watch" task

    grunt.registerTask('build', [
        'clean',
        'copy',
        'less',
        'exec:ts'
    ]);

    grunt.registerTask('run', [
        'exec:run'
    ]);
};
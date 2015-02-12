module.exports = function (grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

      autoprefixer: {
        build: {
          src: 'public/css/style.css'
        }
      },

      csscomb: {
        options: {
          config: 'public/css/.csscomb.json'
        },
        build: {
          src: 'public/css/style.css',
          dest: 'public/css/style.css'
        }
      },

      jekyll: {
        serve: {
          dest: '_site'
        }
      },

      watch: {
        jekyllSources: {
          files: [
            '*.html', '*.md', '*.yml', 'public/**', '_posts/**',
            '_projects/**', '_includes/**', '_layouts/**', '_drafts',
            'atom.xml'
          ],
          tasks: ['shell:jekyll']
        }
      },

      browserSync: {
        serve: {
          bsFiles: {
            src: ['_site/**']
          },
          options: {
            watchTask: true,
            server: {
              baseDir: '_site'
            }
          }
        }
      }

    });

    grunt.registerTask('clean', [
      'autoprefixer:build', 'csscomb:build'
    ]);

    // jekyll build task
    grunt.registerTask('build', ['jekyll']);

    // livereload task
    grunt.registerTask('serve', ['build', 'browserSync', 'watch']);

    // default task
    grunt.registerTask('default', 'clean');
}

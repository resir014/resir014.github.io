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

      shell: {
        jekyll: {
          command: 'jekyll build --drafts'
        }
      },

      watch: {
        options: {
          livereload: true
        },
        jekyllSources: {
          files: [
            '*.html', '*.md', '*.yml', 'public/**', '_posts/**',
            '_projects/**', '_includes/**', '_layouts/**', '_drafts',
            'atom.xml'
          ],
          tasks: ['shell:jekyll']
        }
      },

      connect: {
        server: {
          options: {
            base: '_site/',
            port: 9001
          }
        }
      },
      open: {
        server: {
          path: 'http://localhost:<%= connect.server.options.port %>/'
        }
      }

    });

    grunt.registerTask('clean', [
      'autoprefixer:build', 'csscomb:build'
    ]);

    grunt.registerTask('server', [
      'shell:jekyll',
      'connect:server',
      'open:server',
      'watch'
    ]);

    // jekyll build task
    grunt.registerTask('build', ['shell:jekyll']);

    // livereload task
    grunt.registerTask('serve', ['server']);

    // default task
    grunt.registerTask('default', 'clean');
}

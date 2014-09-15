module.exports = function (grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

      autoprefixer: {
        options: {
          browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
        },
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
            '*.html', '*.md', '*.yml', 'public/css/**.css', '_posts/**',
            '_projects/**', '_includes/**', '_layouts/**', 'atom.xml',
            '**/*.md'
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

    grunt.registerTask('build', [
      'autoprefixer:build', 'csscomb:build'
    ]);

    grunt.registerTask('server', [
      'connect:server',
      'open:server',
      'watch'
    ]);

    // livereload task
    grunt.registerTask('serve', ['server']);

    // default task
    grunt.registerTask('default', 'build');
}

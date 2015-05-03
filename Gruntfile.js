module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      build: {
        src: 'public/css/main.css'
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
    },

    csscomb: {
      options: {
        config: 'public/css/.csscomb.json'
      },
      build: {
        expand: true,
        cwd: 'public/css/',
        src: 'main.css',
        dest: 'public/css'
      }
    },

    jekyll: {
      options: {
        drafts: true
      },
      build: {
        dest: '_site'
      }
    },

    sass: {
      build: {
        options: {
          sourcemap: 'none',
          style: 'nested'
        },
        files: {
          'public/css/main.css': '_scss/main.scss'
        }
      }
    },

    scsslint: {
      files: [
        '_scss/**'
      ],
      options: {
        bundleExec: true,
        config: '_scss/.scss-lint.yml',
        reporterOutput: null
      }
    },

    watch: {
      jekyllSources: {
        files: [
          '*.html', '*.md', '*.yml', 'public/**', '_scss/**', '_posts/**',
          '_projects/**', '_includes/**', '_layouts/**', '_drafts/**',
          'atom.xml'
        ],
        tasks: ['dist']
      }
    }

  });

  grunt.registerTask('clean', [
    'sass', 'autoprefixer:build', 'csscomb:build'
  ]);

  // jekyll build task
  grunt.registerTask('build', ['sass:build', 'autoprefixer:build', 'csscomb:build']);

  // jekyll build task
  grunt.registerTask('dist', ['build', 'jekyll']);

  // SCSS validation
  grunt.registerTask('validate:scss', ['scsslint']);

  // livereload task
  grunt.registerTask('serve', ['dist', 'browserSync', 'watch']);

  // dummy task for SCSS validation
  grunt.registerTask('test', ['validate:scss']);

  // default task
  grunt.registerTask('default', 'build');
}

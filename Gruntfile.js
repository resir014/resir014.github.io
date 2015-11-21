module.exports = function(grunt) {

  // Load all tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      publish: {
        src: '_site/*.css'
      }
    },

    jekyll: {
      options: {
        bundleExec: true
      },
      build: {
        options: {
          dest: '_site',
          config: '_config.yml'
        }
      }
    },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      publish: {
        options: {
          remote: 'git@github.com:resir014/resir014.github.io.git',
          branch: 'master'
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['build']);

  // Manually build page
  grunt.registerTask('build', ['jekyll', 'postcss']);

  // Publish to GitHub
  grunt.registerTask('publish', ['jekyll', 'postcss', 'buildcontrol']);
}

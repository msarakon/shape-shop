module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['browserify', 'jasmine'],
    files: [
      './app/**/*.js',
      './test/**/*.spec.js'
    ],
    preprocessors: {
      './app/**/*.js': ['browserify'],
      './test/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify',
          {
            presets: 'es2015'
          }
        ]
      ]
    }
  });
};

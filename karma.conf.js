module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'e2e/*.spec.js'
    ],
    browsers: [
      'Chrome'
    ],
    singleRun: true
  });
};

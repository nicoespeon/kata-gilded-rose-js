module.exports = function (wallaby) {
  return {
    files: [
      'gilded-rose.js'
    ],

    tests: [
      'gilded-rose.test.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'jest'
  };
};

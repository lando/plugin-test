'use strict';

module.exports = lando => ({
  command: 'test-version',
  describe: 'Provides the version of the plugin-test plugin.',
  level: 'app',
  run: () => {
    var pjson = require('../package.json');
    console.log(pjson.version);
  },
});
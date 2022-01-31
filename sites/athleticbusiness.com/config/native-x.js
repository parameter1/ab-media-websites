const configureNativeX = require('@ab-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f81e162500820001d87de7' },
  ]);

module.exports = config;

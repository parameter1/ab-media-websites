const configureNativeX = require('@ab-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f81e0cc8656600017d19bb' },
  ]);

module.exports = config;

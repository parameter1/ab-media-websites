const configureNativeX = require('@ab-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f81defc8656600017d196f' },
  ]);

module.exports = config;

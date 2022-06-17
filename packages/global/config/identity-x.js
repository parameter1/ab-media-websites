const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const addOmedaIntegrationHooks = require('@parameter1/base-cms-marko-web-omeda-identity-x/add-integration-hooks');
const { get } = require('@parameter1/base-cms-object-path');
const newrelic = require('newrelic');

const omedaConfig = require('./omeda');

const { log } = console;

module.exports = ({
  appId,
  apiToken = process.env.IDENTITYX_API_TOKEN,
  hiddenFields = [],
  requiredServerFields = [
    'organization',
    'countryCode',
  ],
  requiredClientFields = [
    'organization',
    'countryCode',
    'postalCode',
    'street',
    'city',
    'regionCode',
  ],
  omedaGraphQLProp = '$omeda',
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    onHookError: (e) => {
      if (process.env.NODE_ENV === 'development') {
        log('ERROR IN IDENTITY-X HOOK', e);
        if (e.networkError) log('Network Error', get(e, 'networkError.result.errors.0'));
      }
      newrelic.noticeError(e);
    },
  });

  console.log('idxConfig: ', config);

  addOmedaIntegrationHooks({
    idxConfig: config,
    brandKey: omedaConfig.brandKey,
    productId: get(omedaConfig, 'rapidIdentification.productId'),
    omedaGraphQLProp,
  });
  return config;
};

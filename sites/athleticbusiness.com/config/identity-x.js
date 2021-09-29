const configureIdentityX = require('@ab-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '6154db20fa82c60da670be4b',
  requiredServerFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle',
    'countryCode',
    'regionCode',
    'postalCode',
  ],
});

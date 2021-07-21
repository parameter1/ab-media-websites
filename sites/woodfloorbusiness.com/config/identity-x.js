const configureIdentityX = require('@ab-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: 'TBD',
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

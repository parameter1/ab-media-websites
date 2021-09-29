const configureIdentityX = require('@ab-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '6154db4dfa82c643bb70be4d',
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
